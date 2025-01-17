/* eslint-disable @typescript-eslint/no-var-requires */
import { Injectable, Logger } from '@nestjs/common';
import {
  Account,
  CallData,
  Contract,
  RpcProvider,
  stark,
    constants,
} from 'starknet';
import { getCompiledCode } from '../utils/utils';
import { STARKET_TESTNET_VAULT_ABI } from '../abis/matureVault';
import {
  STARKNET_VAULT_ADDRESS,
  STARKNET_STAKING_POOL_ADDRESS,
  STARKNET_STAKER_ADDRESS,
} from '../utils/const';
import { Cron, CronExpression } from '@nestjs/schedule';
import * as process from 'node:process';
require('dotenv').config();

const MATURE_BACKEND_STARKNET_PRIVATE_KEY = "0x030744d24807b228177604beff7be9a1699d668f8e288fb6d4536ae4c60fe4d8"
const MATURE_BACKEND_STARKNET_PUBLIC_KEY = "0x05f967120b6c540e586596399816a939c040cade393a1626d4aaf32dcd42959d"
const RPC_ENDPOINT="https://starknet-sepolia.public.blastapi.io/"
const provider = new RpcProvider({
  nodeUrl: RPC_ENDPOINT,
});

// initialize existing predeployed account 0
console.log('ACCOUNT_ADDRESS=', MATURE_BACKEND_STARKNET_PUBLIC_KEY);
console.log('ACCOUNT_PRIVATE_KEY=', MATURE_BACKEND_STARKNET_PRIVATE_KEY);
const privateKey0 = MATURE_BACKEND_STARKNET_PRIVATE_KEY ?? '';
const accountAddress0: string =
  MATURE_BACKEND_STARKNET_PUBLIC_KEY ?? '';
const owner = new Account(provider, accountAddress0, privateKey0);

@Injectable()
export class StarknetDelegationService  {
  private readonly logger = new Logger(StarknetDelegationService.name);
  private readonly starknetVaultContract: Contract;

  constructor() {
    this.starknetVaultContract = new Contract(
      STARKET_TESTNET_VAULT_ABI,
      STARKNET_VAULT_ADDRESS,
      owner,
    );
  }

  @Cron(CronExpression.EVERY_10_MINUTES)
  async handleTokenDelegation() {
    const amount =
      await this.starknetVaultContract.get_total_amount_to_deposit();
    if (Number(amount.toString()) === 0) {
      this.logger.debug('Not Balance to deposit', { amount });
      return;
    }

    try {
      const tx = await owner.execute(
        {
          contractAddress: STARKNET_VAULT_ADDRESS,
          entrypoint: 'admin_enter_delegation_pool',
          calldata: [STARKNET_STAKING_POOL_ADDRESS, STARKNET_STAKER_ADDRESS],
        },
        {
          version: constants.TRANSACTION_VERSION.V3,
        },
      );

      this.logger.debug({ txDelegate: tx });
    } catch (err) {
      this.logger.error('Error delegating the tokens', err);
    }
  }

  // Every 12min
  @Cron('*/12 * * * *')
  async ClaimReward() {
    const amount = await this.starknetVaultContract.get_unclaimed_rewards(
      STARKNET_STAKING_POOL_ADDRESS,
      STARKNET_STAKER_ADDRESS,
    );
    if (Number(amount.toString()) === 0) {
      this.logger.debug('Not Reward to claim', { amount });
      return;
    }

    try {
      const tx = await owner.execute(
        {
          contractAddress: STARKNET_VAULT_ADDRESS,
          entrypoint: 'admin_claim_rewards',
          calldata: [],
        },
        {
          version: constants.TRANSACTION_VERSION.V3,
        },
      );

      this.logger.debug({ txClaim: tx });
    } catch (err) {
      this.logger.error('Error claiming', err);
    }
  }

  // Every 9min
  @Cron('*/9 * * * *')
  async initiateExit() {
    const amount = await this.starknetVaultContract.get_amount_to_withdraw();
    if (Number(amount.toString()) === 0) {
      this.logger.debug('Not Amount to withdraw', { amount });
      return;
    }

    try {
      const tx = await owner.execute(
        {
          contractAddress: STARKNET_VAULT_ADDRESS,
          entrypoint: 'admin_initiate_exit',
          calldata: [],
        },
        {
          version: constants.TRANSACTION_VERSION.V3,
        },
      );

      this.logger.debug({ txInitiateExit: tx });

      /**
       * NOTE: Should wait 5 minutes before completing the exit
       */
      setTimeout(async () => await this.completeExit(), 300000);
    } catch (err) {
      this.logger.error('Error initiating the exit', err);
    }
  }

  async completeExit() {
    try {
      const tx = await owner.execute(
        {
          contractAddress: STARKNET_VAULT_ADDRESS,
          entrypoint: 'admin_complete_exit',
          calldata: [STARKNET_VAULT_ADDRESS],
        },
        {
          version: constants.TRANSACTION_VERSION.V3,
        },
      );

      this.logger.debug({ txCompleteExit: tx });
    } catch (err) {
      this.logger.error('Error completing the exit', err);
    }
  }
}