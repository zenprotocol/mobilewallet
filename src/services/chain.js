import { AsyncStorage } from "react-native"

const LS_CHAIN = 'lsChain'

export const TESTNET = 'test'
export const MAINNET = 'main'

class Chain {
  // _current = AsyncStorage.getItem(LS_CHAIN) || MAINNET;
  _current = async () => {
    try {
      const value = await AsyncStorage.getItem(LS_CHAIN);
      if (value == null)
        return MAINNET
      return value;
     } catch (error) {
       // Error retrieving data
     }
  }

  get current() {
    return this._current()
  }

  switch = () => {
    const nextChain = this.current === MAINNET ? TESTNET : MAINNET
    this._current = nextChain

    _storeData = async () => {
      try {
        await AsyncStorage.setItem(LS_CHAIN, nextChain);
      } catch (error) {
        // Error saving data
      }
    }

  }
}

const chain = new Chain()

export default chain
