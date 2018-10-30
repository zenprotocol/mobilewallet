import NavigationService from "../../services/NavigationService";
import { networkStore, secretPhraseStore } from '../../stores';

const load = async () => {
  console.log("In load");
  try {
    networkStore.fetch()
  } catch (error) {
    const errMsg = (error && error.response) ? error.response : error
    console.error('error loading wallet', errMsg)
  }
  if (secretPhraseStore.doesWalletExist) {
    NavigationService.navigate("UnlockWallet");
  } else {
    NavigationService.navigate("WelcomeMessages");
  }
}

export default load;
