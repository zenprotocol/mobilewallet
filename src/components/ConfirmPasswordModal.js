// @flow
import React, { Component } from "react";
import { networkStore, secretPhraseStore } from '../stores'
import { MAINNET } from '../services/chain'
import { StyleSheet, View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import Dialog from "react-native-dialog";

type Props = {
  transactionApproved: () => {},
  show: boolean
};

class ConfirmPasswordModal extends Component<Props> {
  state = {
    password: null,
    error: '',
    show: this.props.show,
  };

  onSubmit = () => {
    const { password } = this.state;
    if (!password) {
      this.setState({
        error: 'You must insert a password'
      })
      return;
    }
    if (!secretPhraseStore.isPasswordCorrect(password)) {
      this.setState({
        error: 'Wrong password!'
      })
      return;
    } else {
      this.props.transactionApproved();
    }
  }

  close = () => {
    console.log("Try to close");
    this.setState({show: false})
    this.props.close();
  }

  componentWillUnmount() {
    this.props.close();
  }

  render() {
    const { password, error, show } = this.state;

    return(

        <Dialog.Container visible={show} onBackdropPress={this.close}>
          <Dialog.Title>Password required</Dialog.Title>
          <Dialog.Description>
            {networkStore.chain === MAINNET ? undefined : `Running on ${networkStore.chain} chain`}
          </Dialog.Description>
          <Dialog.Input
            style={{borderColor: 'gray', borderWidth: 0, borderBottomWidth: 1}}
            placeholder="Type your password to continue"
            onChangeText={(password) => this.setState({password})}
            value={password}
          />
          <Text style={{color: '#fd3a3a'}}>{error}</Text>
          <Dialog.Button label="Cancel" onPress={this.close}/>
          <Dialog.Button label="Ok" onPress={this.onSubmit}/>
        </Dialog.Container>

    )
  }
}

export default ConfirmPasswordModal;
