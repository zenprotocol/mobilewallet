import { networkStore, secretPhraseStore } from '../stores';
import chain from '../services/chain';
import routes from '../constants/routes';
import {Alert} from 'react-native';

const switchChain = async () => {
  const shouldSwitch = await shouldSwitchModal();
};

const _switchChain = () => {
  chain.switch();
  secretPhraseStore.reset();
}

export default switchChain;

function shouldSwitchModal() {
  const subTitle = "Switch from" + networkStore.chain + "net to " + networkStore.otherChain + "net? (Continuing will redirect you to the loading screen)"
  Alert.alert(
    'Confirm switching chain',
    subTitle,
    [
      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      {text: 'OK', onPress: () => _switchChain() },
    ],
    { cancelable: false }
  )
}
