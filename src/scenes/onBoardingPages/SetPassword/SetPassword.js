import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Container, Card, CardItem, Content, Item, H1, H3, Button, Text } from "native-base";
import OnBoardingLayout from "../Layout/Layout";
import styles from './styles';
import { View, TextInput } from 'react-native';

type Props = {
  secretPhraseStore: SecretPhraseStore
};

type State = {
  validLength: boolean,
  password: string,
  passwordConfirmation: string,
  passwordsMatch: string,
  passwordVisible: boolean,
  confirmPasswordVisible: boolean;
};

@inject("secretPhraseStore")
@observer
export default class SetPassword extends Component {
  static navigationOptions = {};

  static defaultProps = {};
  state = {
    validLength: false,
    password: '',
    passwordConfirmation: '',
    passwordsMatch: '',
    passwordVisible: true,
    confirmPasswordVisible: true
  }

  onPasswordChanged = (text) => {
    const newValue = text.trim()
    this.setState({
      password: newValue,
      validLength: (newValue.length > 3),
    }, () => {
      this.validatePasswordConfirmation()
    })
  }

  onPasswordConfirmationChanged = (text) => {
    this.setState({
      passwordConfirmation: text.trim(),
    }, () => {
      this.validatePasswordConfirmation()
    })
  }

  validatePasswordConfirmation() {
    const { password, passwordConfirmation } = this.state
    if (password.length > 0) {
      if (passwordConfirmation.length === 0) { this.setState({ passwordsMatch: '' }) }
      if (passwordConfirmation.length > 0) {
        if (password.includes(passwordConfirmation)) {
          this.setState({ passwordsMatch: 'contains' })
        } else {
          this.setState({ passwordsMatch: 'error' })
        }
        if (password === passwordConfirmation) {
          this.setState({ passwordsMatch: 'match' })
          return true
        }
      }
    }
    return false
  }

  onClickTogglePasswordVisibility = (input) => {
    this.setState({ [input]: !this.state[input] })
  }

  onMinutesChange = (text) => {
    const { secretPhraseStore } = this.props
    secretPhraseStore.setAutoLogoutMinutes(text.toString());
  }

  validatePassword() {
    const { passwordsMatch, validLength } = this.state
    return passwordsMatch === 'match' && validLength
  }

  onSubmitClicked = () => {
    const { navigation, secretPhraseStore } = this.props
    secretPhraseStore.importWallet(this.state.password)
    navigation.navigate("TermOfService");
  }

  renderPasswordConfirmInput() {
  }

  render() {
    const { navigation, secretPhraseStore } = this.props;
    const { isImporting, autoLogoutMinutes } = secretPhraseStore
    const { password, passwordConfirmation, passwordVisible, confirmPasswordVisible } = this.state
    const logoutMinutes = autoLogoutMinutes ? autoLogoutMinutes.toString() : ''
    return (
      <OnBoardingLayout className="import-wallet-container" progressStep={3}>
        <Container style={styles.container}>
          <H1 style={styles.h1}>Create a password</H1>
          <H3 style={styles.h3}>
            {" "}
            Your password gives you a quick access to your wallet.&nbsp;
          </H3>
          <View style={styles.hrLine} />
          <Text style={styles.sectionHeader}>
            Make sure your password includes:
            </Text>
          <H3 style={styles.subHeaderText}>
            At least 4 characters
            </H3>

          <TextInput style={styles.textInput}
            placeholder='Enter Password'
            inputType={'password'}
            secureTextEntry={passwordVisible}
            value={password}
            onChangeText={(text) => this.onPasswordChanged(text)}
            placeholderTextColor={'#fff'} />

          <Button secondary block style={styles.button} onPress={() => this.onClickTogglePasswordVisibility('passwordVisible')} >
            <Text style={styles.buttonText}>Password Toogle</Text>
          </Button>

          <TextInput style={styles.textInput}
            inputType={'password'}
            value={passwordConfirmation}
            secureTextEntry={confirmPasswordVisible}
            onChangeText={(text) => this.onPasswordConfirmationChanged(text)}
            placeholder='Confirm Password'
            placeholderTextColor={'#fff'} />
          <View style={styles.innerHrLine} />
          <Button secondary block style={styles.button} onPress={() => this.onClickTogglePasswordVisibility('confirmPasswordVisible')} >
            <Text style={styles.buttonText}>Password Toogle</Text>
          </Button>

          <Text style={styles.sectionHeader}>
            Auto logout
          </Text>
          <H3 style={styles.subHeaderText}>
            After how many minutes you would like to automatically log out?
          </H3>
          <TextInput value={'15'} style={styles.textInput} value={logoutMinutes}
            keyboardType={"numeric"}
            onChangeText={(text) => this.onMinutesChange(text)} placeholder='Auto Logout' />
          <View style={styles.hrLine} />

          <Card transparent style={styles.card}>
            <CardItem>
              <Button secondary block style={styles.button} onPress={() => navigation.navigate("ImportOrCreateWallet")} >
                <Text style={styles.buttonText}>Back</Text>
              </Button>
              <Button block style={styles.button} onPress={this.onSubmitClicked} disabled={!this.validatePassword() || isImporting} >
                <Text style={styles.buttonText}>{isImporting ? 'Importing ...' : 'Continue'}</Text>
              </Button>
            </CardItem>
          </Card>

        </Container>
      </OnBoardingLayout>
    );
  }
}

SetPassword.propTypes = {};
