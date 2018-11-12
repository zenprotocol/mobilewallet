import asyncStorageUtils from "../utils/asyncStorageUtils";
import { networkStore, secretPhraseStore } from '../stores';
export const LS_CHAIN = "lsChain";

export const TESTNET = "test";
export const MAINNET = "main";

class Chain {
  _current;

  get current() {
    return networkStore.chain
  }

  switch = () => {
    const nextChain = this.current === MAINNET ? TESTNET : MAINNET;
    this._current = nextChain;
    asyncStorageUtils.storeData(LS_CHAIN, nextChain);
  };
}

const chain = new Chain();

export default chain;
