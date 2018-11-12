import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { View, TouchableOpacity, Clipboard } from 'react-native';
import { Container, Content, Card, CardItem, H1, H3, Textarea, Button, Text } from "native-base";
import SecretPhraseStore from "../../../stores/secretPhraseStore";
import OnBoardingLayout from "../Layout/Layout";
import bip39 from 'react-native-bip39';
import styles from "./styles";
import { isEmpty } from 'lodash';
import StepIndicator from '../../../components/StepIndicator';
type Props = {
  secretPhraseStore: SecretPhraseStore
};

type State = {
  userInputWords: string,
  canPaste: string
};

@inject("secretPhraseStore")
@observer
class ImportWallet extends Component<Props, State> {
  static navigationOptions = {
    header: null
  };

  state = {
    userInputWords: '',
    canPaste: null
  };

  componentDidMount() {
    Clipboard.getString().then(value => {
      this.setState({ canPaste: value })
    })
  }

  get isValidBip39Mnemonic() {
    const mnemonicPhraseString = this.state.userInputWords;
    return bip39.validateMnemonic(mnemonicPhraseString);
  }

  reset = () => {
    this.setState({ userInputWords: '' });
  };

  onSubmitClicked = () => {
    const { secretPhraseStore, navigation } = this.props;
    const { userInputWords } = this.state;

    if (!isEmpty(userInputWords)) {
      secretPhraseStore.setMnemonicToImport(this.state.userInputWords);
      navigation.navigate('SetPassword');
    }
  };

  onHandleSecretPhrase = (text) => {
    this.setState({ userInputWords: text });
  }

  onBackClicked = () => {
    const { navigation } = this.props;
    navigation.navigate('ImportOrCreateWallet');
  }

  onPaste = () => {
    Clipboard.getString().then(value => {
      this.setState({ userInputWords: value });
    })
  }

  render() {
    const { navigation } = this.props;
    const isImport = navigation.getParam('isImport', false);
    const { userInputWords } = this.state;

    return (
      <OnBoardingLayout className="import-wallet-container" progressStep={2}>
        <Container style={styles.container}>
          <StepIndicator currentPosition={2} />
          <Content>
            <H1 style={styles.h1}>{isImport ? 'Import' : 'Verify'} Your Mnemonic Passphrase (Seed)</H1>
            <H3 style={styles.h3}>
              Please enter your 24 word secret phrase in the correct order.&nbsp;
            </H3>
            <View style={styles.hrLine} />
            <Card transparent style={styles.card}>
              <CardItem>
                <Textarea
                  style={styles.textArea}
                  placeholder="Mnemonic Passphrase (Paste here)"
                  onChangeText={(text) => this.onHandleSecretPhrase(text)}
                  rowSpan={5}
                  value={userInputWords} />
              </CardItem>
            </Card>
            <View style={styles.hrLine} />
            <Card transparent style={styles.card}>
              <CardItem>
                <Button block style={styles.button} onPress={this.onSubmitClicked} disabled={!userInputWords}>
                  <Text style={styles.buttonText}>Continue</Text>
                </Button>
              </CardItem>
              <CardItem>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.touchableBackText}>Whoops, I didn’t write my recovery phrase.</Text>
                </TouchableOpacity>
              </CardItem>
              <CardItem>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ImportOrCreateWallet")} >
                  <Text style={styles.touchableNextText}>Create New Wallet</Text>
                </TouchableOpacity>
              </CardItem>
            </Card>
          </Content>
        </Container>
      </OnBoardingLayout>
    );
  }
}

export default ImportWallet;
