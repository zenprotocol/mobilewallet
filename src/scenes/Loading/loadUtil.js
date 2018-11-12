import NavigationService from "../../services/NavigationService";
import { networkStore, secretPhraseStore } from '../../stores';

const load = async () => {
  try {
    await networkStore.fetch()
    await secretPhraseStore.checkWalletExist();
  } catch (error) {
    const errMsg = (error && error.response) ? error.response : error
    console.error('error loading wallet', errMsg)
  }
  console.log("in load util");
  console.log(secretPhraseStore.doesWalletExist);
  if (secretPhraseStore.doesWalletExist) {
    NavigationService.navigate("UnlockWallet");
  } else {
    NavigationService.navigate("WelcomeMessages");
  }
}

export default load;
