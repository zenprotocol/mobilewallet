import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Container, Content, Item, H1, H2, H3, Button, Input, Right, Col, Grid } from "native-base";
import OnBoardingLayout from "../Layout/Layout";
import styles from './styles';
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import StepIndicator from '../../../components/StepIndicator';

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

  static navigationOptions = {
    header: null,
  }

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
    const { navigation, secretPhraseStore } = this.props;
    secretPhraseStore.importWallet(this.state.password);
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
          <StepIndicator currentPosition={3} />
          <Content style={styles.content}>
            <H1 style={{color: "#fff", marginBottom: 5}}>Create a password</H1>
            <Text style={{color: "#777", marginBottom: 10}}>Your password gives you a quick access to your wallet</Text>
            <Text style={{color: "#fff", fontSize: 18, marginBottom: 5}}>Make sure your password includes:</Text>
            <Text style={{color: "#777", marginBottom: 10}}>At least 4 characters</Text>

            <Item style={{marginBottom: 20}}>
              <Input
                placeholder='Enter Password'
                inputType={'password'}
                style={{ color: "#fff" }}
                secureTextEntry={passwordVisible}
                value={password}
                onChangeText={(text) => this.onPasswordChanged(text)}
                placeholderTextColor={'#fff'}
              />
              <TouchableOpacity onPress={() => this.onClickTogglePasswordVisibility('passwordVisible')} >
                <Icon name={passwordVisible ? 'eye' : 'eye-slash'} size={24} color="gray" />
              </TouchableOpacity>
            </Item>

            <Item style={{marginBottom: 30}}>
              <Input
                inputType={'password'}
                value={passwordConfirmation}
                secureTextEntry={confirmPasswordVisible}
                onChangeText={(text) => this.onPasswordConfirmationChanged(text)}
                placeholder='Confirm Password'
                placeholderTextColor={'#fff'} />
              <TouchableOpacity onPress={() => this.onClickTogglePasswordVisibility('confirmPasswordVisible')} >
                <Icon name={confirmPasswordVisible ? 'eye' : 'eye-slash'} size={24} color="gray" />
              </TouchableOpacity>
            </Item>

            <Text style={{color: "#fff", fontSize: 18, marginBottom: 10}}>Auto logout</Text>
            <Text style={{color: "#fff"}}>After how many minutes you would like to automatically log out?</Text>

            <Item style={{marginBottom: 30}}>
              <Input
                style={{color: "#fff"}}
                value={'15'}
                value={logoutMinutes}
                keyboardType={"numeric"}
                onChangeText={(text) => this.onMinutesChange(text)}
                placeholder='Auto Logout' />
            </Item>

            <Grid style={{marginBottom: 50}}>
              <Col>
                <Button secondary block style={{ marginRight: 5 }} onPress={() => navigation.navigate("ImportOrCreateWallet")} >
                  <Text style={styles.buttonText}>Back</Text>
                </Button>
              </Col>
              <Col>
                <Button block style={{ marginLeft: 5 }} onPress={this.onSubmitClicked} disabled={!this.validatePassword() || isImporting} >
                  <Text style={styles.buttonText}>{isImporting ? 'Importing ...' : 'Continue'}</Text>
                </Button>
              </Col>
            </Grid>


          </Content>

      </OnBoardingLayout>
    );
  }
}
