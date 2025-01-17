import {
  MATURE_BACKEND_STARKNET_PRIVATE_KEY,
  MATURE_BACKEND_STARKNET_PUBLIC_KEY,
} from './const';
import { Account, CallData, Contract, RpcProvider, stark } from "starknet";
import { getCompiledCode } from './utils';



export class StarknetWallet {
  public readonly account: Account;
  public readonly provider: RpcProvider;

  constructor() {
    this.provider = new RpcProvider({
      nodeUrl: process.env.RPC_ENDPOINT,
    });
    this.account = new Account(
      this.provider,
      MATURE_BACKEND_STARKNET_PUBLIC_KEY,
      MATURE_BACKEND_STARKNET_PRIVATE_KEY,
    );
  }
}
