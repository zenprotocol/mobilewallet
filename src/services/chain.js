import asyncStorageUtils from "../utils/asyncStorageUtils";

const LS_CHAIN = 'lsChain'

export const TESTNET = 'test'
export const MAINNET = 'main'

class Chain {
  // _current = AsyncStorage.getItem(LS_CHAIN) || MAINNET;
  _current = asyncStorageUtils.retrieveData(LS_CHAIN) || MAINNET;

  get current() {
    return this._current;
  }

  switch = () => {
    const nextChain = this.current === MAINNET ? TESTNET : MAINNET
    this._current = nextChain

    asyncStorageUtils.storeData(LS_CHAIN, nextChain)

  }
}

const chain = new Chain()

export default chain
