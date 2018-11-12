import React, { Component } from "react";
import { View, Text } from 'react-native';
import isWalletExists from './utils/isWalletExists';
import { AsyncStorage } from "react-native";
import { inject, observer } from "mobx-react";
import { networkStore, secretPhraseStore, publicAddressStore } from "./stores";
import LoadingModel from './components/LoadingModal';
import SplashScreen from 'react-native-splash-screen';

@inject("networkStore")
@observer
export default class LoadingApp extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    await networkStore.getCurrentChain();
    const walletExists = await isWalletExists();
    if (walletExists) {
      await networkStore.getSeed;
      // await publicAddressStore.fetch()
    }
    SplashScreen.hide();
    this.props.navigation.navigate(walletExists ? 'Private' : 'Public');
  }

  // Render any loading content that you like here
  render() {
    return (
      <View style={{backgroundColor: "#121212"}}>
        <LoadingModel />
      </View>
    );
  }
}
