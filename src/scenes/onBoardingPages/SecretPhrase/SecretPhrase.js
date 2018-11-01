import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { View, Clipboard, ScrollView } from "react-native";
import { Button, H1, H3, Text, Container, Card, CardItem, CheckBox, Label } from "native-base";
import SecretPhraseStore from "../../../stores/secretPhraseStore";
import OnBoardingLayout from "../Layout/Layout";
import styles from "./styles";
import Icon from "react-native-vector-icons/Foundation";
import StepIndicator from '../../../components/StepIndicator';
type Props = {
  secretPhraseStore: SecretPhraseStore
};

type State = {
  isSave: boolean,
  isCopy: boolean,
};

@inject("secretPhraseStore")
@observer
class SecretPhrase extends Component<Props, State> {

  static navigationOptions = {
    header: null,
  }

  state = {
    isSave: false,
    isCopy: false
  };

  componentWillMount() {
    this.props.secretPhraseStore.generateSeed();
  }

  onBackClicked = () => {
    const { navigation } = this.props;
    navigation.navigate('ImportOrCreateWallet');
  }

  onCopyClicked = () => {
    const { secretPhraseStore, navigation } = this.props;
    const { mnemonicPhrase } = secretPhraseStore;
    Clipboard.setString(mnemonicPhrase);
    this.setState({ isCopy: true });
  }

  render() {
    const { isSave, isCopy } = this.state;
    const { secretPhraseStore, navigation } = this.props;
    const { mnemonicPhrase } = secretPhraseStore;

    return (
      <OnBoardingLayout className="import-wallet-container" progressStep={3}>
        <Container style={styles.container}>
          <StepIndicator currentPosition={1} />
          <H1 style={styles.h1}>Your Mnemonic Passphrase (seed)</H1>
          <H3 style={styles.h3}>
            {" "}
            Write down the following words in chronological order and save it in a
            secure place.&nbsp;
          </H3>
          <View style={styles.hrLine} />
          <ScrollView>
          <Text style={styles.mnemonicText}>{mnemonicPhrase}</Text>
          <Card transparent style={styles.card}>
            <CardItem>
              <Button block style={styles.button} onPress={this.onCopyClicked}>
                <Text style={styles.buttonText}>{isCopy ? 'Copied' : 'Copy'}</Text>
              </Button>
            </CardItem>
            <CardItem>
              <Text style={styles.warningText}><Icon name="alert" style={{paddingRight: 15}}/>IF YOU LOSE THIS PASSPHRASE YOU WILL LOSE ALL ASSETS IN THE WALLET!</Text>
            </CardItem>
          </Card>
          <View style={styles.hrLine} />
          <Card transparent style={styles.card}>
            <CardItem>
              <CheckBox checked={isSave} onPress={() => this.setState({ isSave: !isSave })} />
              <Text style={styles.h3} onPress={() => this.setState({ isSave: !isSave })}> I saved my passphrase and it’s secure</Text>
            </CardItem>
            <CardItem>
              <Button block style={styles.button} secondary onPress={this.onBackClicked}>
                <Text style={styles.buttonText}>Back</Text>
              </Button>
              <Button block style={styles.button} disabled={!isSave} onPress={() => navigation.navigate("ImportWallet")}>
                <Text style={styles.buttonText}>Next</Text>
              </Button>
            </CardItem>
          </Card>
          </ScrollView>
        </Container>
      </OnBoardingLayout>
    );
  }
}

export default SecretPhrase;
