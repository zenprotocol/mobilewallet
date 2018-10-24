import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import SecretPhraseStore from '../../../stores/secretPhraseStore'
import OnBoardingLayout from '../Layout/Layout';
import { Button, H1, H3, Text } from 'native-base';
import styles from './styles';

type Props = {
  secretPhraseStore: SecretPhraseStore
};

type State = {
  userInputWords: Array<string>
};

@inject('secretPhraseStore')
@observer
class SecretPhrase extends Component<Props, State> {

  componentWillMount() {
    this.props.secretPhraseStore.generateSeed()
  }

  render() {
    const {
      secretPhraseStore,
      navigation,
    } = this.props;

    const { mnemonicPhrase } = secretPhraseStore;
    
    console.log(mnemonicPhrase)
    const mnemonicPhraseList = (mnemonicPhrase && mnemonicPhrase.split(' ')) || [];
    console.log(mnemonicPhraseList)
    return (
      <OnBoardingLayout className="import-wallet-container" progressStep={3}>
        <H1>Your Mnemonic Passphrase (seed)</H1>
        <H3> Write down the following words in chronological order and
          save it in a secure place.&nbsp;</H3>
        {mnemonicPhraseList.map((phrase, key) =>
          <Text>{phrase}</Text>
        )}
        <Button block onPress={() => navigation.navigate('ImportWallet')}>
          <Text style={styles.buttonText}>Next</Text>
        </Button>
      </OnBoardingLayout>
    )
  }

}

export default SecretPhrase;
