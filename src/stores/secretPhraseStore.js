import { observable, action, runInAction } from 'mobx';
import bip39 from 'react-native-bip39';
import { SecurePhrase } from '@zen/zenjs'
import NavigationService from "../services/NavigationService";
import { AsyncStorage } from "react-native";
import chain, { MAINNET } from '../services/chain';
import wallet from '../services/wallet';
import { isDev } from '../utils/helpers';
import asyncStorageUtils from '../utils/asyncStorageUtils';

const LS_AUTO_LOGOUT_MINUTES = 'lsAutoLogoutMinutes';
const LS_TESTNET_SEED = 'lsTestnetSeed';
const LS_MAINNET_SEED = 'lsMainnetSeed';

class secretPhraseStore {


  @observable
  mnemonicPhrase = ''

  @observable
  walletExist;

  @observable
  seedKey;

  @observable
  isLoggedIn = false

  @observable
  autoLogoutMinutes = Number(AsyncStorage.getItem(LS_AUTO_LOGOUT_MINUTES)) || 15

  @observable
  inProgress = false

  @observable
  isImporting = false

  @observable
  importError = ''

  @observable
  status = ''

  constructor(networkStore, portfolioStore, activeContractsStore, redeemTokensStore) {
    this.networkStore = networkStore;
    this.portfolioStore = portfolioStore;
    this.activeContractsStore = activeContractsStore;
    this.redeemTokensStore = redeemTokensStore;
    this.checkWalletExist();
    this.getSeed();
    if (isDev()) {
      this.initDev();
    }
  }

  @action.bound
  generateSeed= async () => {
    this.mnemonicPhrase = await bip39.generateMnemonic(256);
  }

  @action
  setMnemonicToImport(userInputWords) {
    this.mnemonicPhrase = userInputWords;
    // history.push(routes.SET_PASSWORD)
  }

  @action
  async checkWalletExist() {
    try {
       await AsyncStorage.getItem(this.lsSeedKey).then(res => {
        runInAction(() => {
          this.walletExist = !!res;
        })
      })
     } catch (error) {
       // Error retrieving data
       console.log(error);
     }
  }

  @action
  importWallet(password) {
    wallet.create(this.mnemonicPhraseAsString)
    console.log(password, this.mnemonicPhraseAsString)
    const encryptedMnemonicPhraseAsString = SecurePhrase.encrypt(password, this.mnemonicPhraseAsString)
    console.log(encryptedMnemonicPhraseAsString)
    asyncStorageUtils.storeData(this.lsSeedKey, encryptedMnemonicPhraseAsString)
    this.mnemonicPhrase = '';
    this.isLoggedIn = true
    this.networkStore.initPolling()
    this.activeContractsStore.fetch()
    // history.push(routes.TERMS_OF_SERVICE)
  }

  @action
  async unlockWallet(password) {
    if (!this.isPasswordCorrect(password)) {
      this.status = 'error';
      return;
    }
    const decryptedMnemonicPhraseAsString = this.decryptMnemonicPhrase(password);
    if (!decryptedMnemonicPhraseAsString) {
      this.status = 'error';
      return;
    }
    wallet.create(decryptedMnemonicPhraseAsString);
    this.isLoggedIn = true;
    this.networkStore.initPolling();
    this.activeContractsStore.fetch();
    if (this.redeemTokensStore.shouldRedeemNonMainnetTokens) {
      NavigationService.navigate("Portfolio");
      // history.push(routes.FAUCET)
    } else {
      NavigationService.navigate("Portfolio");
    }
  }

  async getSeed() {
    await AsyncStorage.getItem(this.lsSeedKey).then(res => {
      runInAction(() => {
          this.seedKey = res
      })
    })
  }

  isPasswordCorrect(password) {
    return !!this.decryptMnemonicPhrase(password);
  }

  get mnemonicPhraseAsString() {
    return this.mnemonicPhrase;
  }

  decryptMnemonicPhrase(password) {
    try {
      // wrong password throws, so returning false to indicate that
      return SecurePhrase.decrypt(password, this.seedKey).toString();
    } catch (err) {
      return false;
    }
  }

  @action
  unlockWalletClearForm() {
    this.status = '';
  }

  @action
  setAutoLogoutMinutes(minutes) {
    console.log(minutes)
    minutes = Number(minutes);
    if (minutes < 1) { minutes = 1; }
    if (minutes > 120) { minutes = 120; }
    this.autoLogoutMinutes = minutes;
    AsyncStorage.setItem(LS_AUTO_LOGOUT_MINUTES, minutes.toString());
  }

  @action
  logout() {
    this.reset();
    NavigationService.navigate("UnlockWallet");
  }

  @action
  reset() {
    console.log('reset');
    this.mnemonicPhrase = [];
    this.importError = '';
    this.status = '';
    this.isLoggedIn = false;
    wallet.destroy();
    this.networkStore.stopPolling();
  }

  @action
  initDev() {
    this.networkStore.initPolling();
    this.activeContractsStore.fetch();
  }

  get doesWalletExist() {
    return this.walletExist;
  }

  get lsSeedKey() {
    return chain.current === MAINNET ? LS_MAINNET_SEED : LS_TESTNET_SEED;
  }
}

export default secretPhraseStore;
