import { networkStore, secretPhraseStore } from '../stores';

const isWelletExists = async () => {
  try {
    await networkStore.fetch();
    await secretPhraseStore.checkWalletExist();
  } catch (error) {
    const errMsg = (error && error.response) ? error.response : error
    console.error('error loading wallet', errMsg)
  }
  if (secretPhraseStore.doesWalletExist) {
    return true;
  } else {
    return false;
  }
}

export default isWelletExists;
