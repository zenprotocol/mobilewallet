import React, { Component } from "react";
import { Provider } from "mobx-react/native";
import { inject, observer } from "mobx-react";
import { StyleProvider } from "native-base";
import { Platform, View } from "react-native";
import SplashScreen from "react-native-splash-screen";
import * as stores from "./stores";
import NavigationService from "./services/NavigationService";
import getTheme from "../native-base-theme/components";
import {PublicNavigator, PrivateNavigator} from "./routes";
import platform from "../native-base-theme/variables/platform";
import StatusBar from './components/StatusBar.js';
import isWalletExists from './utils/isWalletExists';
import { AsyncStorage } from "react-native";
// TODO:  Check for SafeAreaView for android
// <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>

@observer
export default class App extends Component {
  state = {
    walletExists: false
  };

  async componentDidMount() {
    const walletExists = await isWalletExists();
    console.log("Does Wallet Exist:", walletExists);
    this.setState({
      walletExists
    });
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    const { walletExists } = this.state;
    console.log(stores.secretPhraseStore.walletExist);
    const TopLevelNavigator = stores.secretPhraseStore.walletExist ? PrivateNavigator : PublicNavigator;
    return (
      <View style={{ flex: 1 }}>
        <Provider {...stores}>
          <React.Fragment>
            <StatusBar backgroundColor="#000" barStyle="light-content" />
            <StyleProvider style={getTheme(platform)}>
              <TopLevelNavigator
                ref={navigatorRef => {
                  NavigationService.setTopLevelNavigator(navigatorRef);
                }}
              />
            </StyleProvider>
          </React.Fragment>
        </Provider>
      </View>
    );
  }
}
