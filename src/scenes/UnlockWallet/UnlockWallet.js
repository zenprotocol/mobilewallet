// @flow

import React, { Component } from "react";
import { TouchableOpacity, TextInput } from "react-native";
import {
  Button,
  Card,
  CardItem,
  Text,
  Container,
  H1,
  H3
} from "native-base";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import styles from "./styles";
import SecretPhraseStore from "../../stores/secretPhraseStore";
// import wipeLocalStorage from "../Settings/wipeLocalStorageUtil";

type Props = {
  secretPhraseStore: SecretPhraseStore
};

type State = {
  password: string,
  unlockPasswordVisibility: boolean
};

class UnlockWallet extends Component<Props, State> {

  state = {
    password: "",
    unlockPasswordVisibility: true
  };

  onClickTogglePasswordVisibility = (input) => {
    this.setState({ [input]: !this.state[input] })
  }

  render() {
    const { navigation } = this.props;
    const { unlockPasswordVisibility} = this.state;
    return (
      <Container style={styles.container}>
        <H1 style={styles.h1}>Unlock Your Wallet</H1>
        <H3 style={styles.h3}>Please enter your password</H3>
        <Card transparent style={styles.card}>
          <CardItem>
            <TextInput
              placeholder='   Enter Password  '
              inputType={'password'}
              placeholderTextColor={'#fff'}
              style={styles.textInput}
              secureTextEntry={unlockPasswordVisibility} />
            <TouchableOpacity onPress={() => this.onClickTogglePasswordVisibility('unlockPasswordVisibility')}>
              <Icon name={unlockPasswordVisibility ? 'eye' : 'eye-slash'} size={24} color="gray" />
            </TouchableOpacity>
          </CardItem>
          <CardItem>
            <Button
              block
              style={styles.button}
              onPress={() => navigation.navigate("ImportOrCreateWallet")}
            >
              <Text style={styles.buttonText}>Unlock</Text>
            </Button>
          </CardItem>
          <CardItem>
            <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
              <Text style={styles.anchorButton}>Forgot your password?</Text>
            </TouchableOpacity>
          </CardItem>
          <CardItem>
            <TouchableOpacity onPress={() => navigation.navigate("ImportOrCreateWallet")}>
              <Text style={styles.anchorButton}>Import your wallet again or create a new one</Text>
            </TouchableOpacity>
          </CardItem>
        </Card>
      </Container>
    );
  }
}

export default UnlockWallet;
