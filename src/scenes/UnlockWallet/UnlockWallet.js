// @flow

import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { View } from 'react-native';
import { Button, H1, H3, Form, Item, Input, Text, Container } from "native-base";

import SecretPhraseStore from '../../stores/secretPhraseStore';
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

  onClickTogglePasswordVisibility = () => {

  }

  onChange = (evt: SyntheticEvent<HTMLInputElement>) => {

  }

  onSubmit = (evt: SyntheticEvent<*>) => {

  }

  renderErrorMessage() {}

  render() {
    const { password, hidePassword } = this.state
    const { status, inProgress } = this.props.secretPhraseStore

    return (
      <Container>
        <H1>Unlock Your Wallet</H1>
        <H3>Please enter your password</H3>
        <Form>
          <Item>
            <Input placeholder="Password" />
          </Item>
        </Form>
        <Button><TExt>Unlock</Text></Button>
        <Text>Forgot your password? Import your wallet again or create a new one</Text>
      </Container>
    )

}
