/* eslint-disable @typescript-eslint/no-var-requires */
import * as process from 'node:process';
import { toFixedFloat } from './helpers';

require('dotenv').config();

export const MATURE_BACKEND_STARKNET_PRIVATE_KEY =
  process.env.MATURE_BACKEND_STARKNET_PRIVATE_KEY;
export const MATURE_BACKEND_STARKNET_PUBLIC_KEY =
  process.env.MATURE_BACKEND_STARKNET_PUBLIC_KEY;

export const STARKNET_RPC_PROVIDER =
  'https://starknet-sepolia.infura.io/v3/2XRMi0uFa4HRoeUk9DGXmQCEQX9';

export const MA_STRK_TOKEN_ADDRESS =
  '0x00e09247cf092bafda2307df5bb7bbf727bd715f8efd3bebc3cd39ca7bcba863';
export const STARKNET_VAULT_ADDRESS =
  '0x05c0b1c170b753578a3358e08274e630de0c7ed32423456ae2e2071c31c01a00';
export const STRK_TOKEN_ADDRESS =
  '0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d';
export const STARKNET_STAKING_POOL_ADDRESS =
  '0x03745ab04a431fc02871a139be6b93d9260b0ff3e779ad9c8b377183b23109f1';
export const STARKNET_STAKER_ADDRESS =
  '0x05f967120b6c540e586596399816a939c040cade393a1626d4aaf32dcd42959d';

export const STARKNET_SEPOLIA = {
  id: '',
  name: 'STRK',
  nativeCurrency: {
    name: 'STRK',
    symbol: 'STRK',
    decimals: 18,
  },
  contracts: {
    multicall3: {
      address:
        '0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d',
    },
  },
  blockExplorers: {
    default: {
      name: 'Starknet Sepoliaa Explorer',
      url: 'https://sepolia.starkscan.co/',
    },
  },
};
