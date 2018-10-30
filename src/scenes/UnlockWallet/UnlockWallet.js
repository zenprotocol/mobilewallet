// @flow

import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { View, TouchableOpacity } from 'react-native';
import { Button, H1, H3, Form, Item, Input, Text, Container, Content, Icon } from "native-base";
import SecretPhraseStore from '../../stores/secretPhraseStore';
import styles from "./styles";
import FoundationIcon from "react-native-vector-icons/Foundation";
import NetBottomBar from "../../components/NetBottomBar";
// import wipeLocalStorage from "../Settings/wipeLocalStorageUtil";

type Props = {
  secretPhraseStore: SecretPhraseStore
};

type State = {
  password: string,
  hidePassword: boolean
};

@inject('secretPhraseStore')
@observer
class UnlockWallet extends Component<Props, State> {

  state = {
    password: '',
    hidePassword: true,
  }

  static navigationOptions = {
    header: null,
  }

  onClickTogglePasswordVisibility = () => {}

  onChange = (text: String) => {
    this.setState({ password: text.trim() })
    this.props.secretPhraseStore.unlockWalletClearForm()
  }

  onSubmit = (evt: SyntheticEvent<*>) => {
    evt.preventDefault();
    this.props.secretPhraseStore.unlockWallet(this.state.password);
  }

  renderErrorMessage() {
    const {status} = this.props.secretPhraseStore;
    if (status === 'error') {
      return (
        <View style={styles.row}>
          <FoundationIcon name="alert" style={{fontSize: 15, paddingRight: 10, color: '#fd3a3a'}}/>
          <Text style={{color: '#fd3a3a',}}>
            Password is incorrect
          </Text>
        </View>
      )
    }
  }


  render() {
    const { password, hidePassword } = this.state
    const { status, inProgress } = this.props.secretPhraseStore

    return (
      <View style={{ flex: 1}}>
        <Container style={styles.container}>
            <H1 style={styles.text}>Unlock Your Wallet</H1>
            <Text style={styles.text}>Please enter your password</Text>
            <Form style={styles.form}>
              <Item regular error={status === 'error'}>
                <Input name="password"
                    textContentType={hidePassword ? 'password' : 'text'}
                    secureTextEntry={true}
                    value={password}
                    style={{color: "#fff"}}
                    placeholder="Enter password"
                    onChangeText={this.onChange}
                    />
                  <Icon style={{color: 'gray'}} ios='ios-eye-off' android="md-eye-off" />
              </Item>
              { this.renderErrorMessage() }
              <Button onPress={this.onSubmit} full disabled={(password.length < 4 || inProgress)} style={styles.button}>
                <Text style={{textAlign: "center"}}>Unlock</Text>
                <Icon ios='ios-unlock' android="md-unlock" style={{fontSize: 20}} />
              </Button>
              <TouchableOpacity onPress={this._onPressButton}>
                <Text style={{color: '#2f8be6'}}>Forgot your password? Import your wallet again or create a new one</Text>
              </TouchableOpacity>
            </Form>
        </Container>
        <NetBottomBar />
      </View>
    )
  }
}

export default UnlockWallet;
