import React, { Component } from "react";
import { View, Text } from 'react-native';
import isWalletExists from './utils/isWalletExists';
import { AsyncStorage } from "react-native";
import { inject, observer } from "mobx-react";
import { networkStore, secretPhraseStore } from "./stores";
import SplashScreen from "react-native-splash-screen";

@inject("networkStore")
@observer
export default class LoadingApp extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    console.log("In _bootstrapAsync");
    await networkStore.getCurrentChain();
    const walletExists = await isWalletExists();
    await SplashScreen.hide();
    this.props.navigation.navigate(walletExists ? 'Private' : 'Public');
  }

  // Render any loading content that you like here
  render() {
    return (
      <View style={{backgroundColor: "#121212"}}>

      </View>
    );
  }
}
