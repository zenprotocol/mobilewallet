import { Alert } from 'react-native';
import { networkStore, secretPhraseStore } from '../stores';
import chain from '../services/chain';
import NavigationService from '../services/NavigationService';


const submitSwitchChain = () => {
  chain.switch();
  secretPhraseStore.reset();
  NavigationService.navigate('WelcomeMessages');
};

function shouldSwitchModal() {
  const subTitle = `Switch from ${networkStore.chain} net to ${networkStore.otherChain} net? (Continuing will redirect you to the loading screen)`;
  Alert.alert(
    'Confirm switching chain',
    subTitle,
    [
      { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
      { text: 'OK', onPress: () => submitSwitchChain() },
    ],
    { cancelable: false },
  );
}

const switchChain = async () => {
  await shouldSwitchModal();
};

export default switchChain;
