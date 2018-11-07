import React, { Component } from "react";
import { Provider } from "mobx-react/native";
import { inject, observer } from "mobx-react";
import { StyleProvider } from "native-base";
import { Platform, View } from "react-native";
import SplashScreen from "react-native-splash-screen";
import * as stores from "./stores";
import NavigationService from "./services/NavigationService";
import getTheme from "../native-base-theme/components";
import { SwitchNavigator } from "./routes";
import {createAppContainer} from 'react-navigation'
import platform from "../native-base-theme/variables/platform";
import StatusBar from './components/StatusBar.js';
import isWalletExists from './utils/isWalletExists';
import { AsyncStorage } from "react-native";
// TODO:  Check for SafeAreaView for android
// <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>

@observer
export default class App extends Component {

  componentDidMount() {
  }

  render() {
    // const { walletExists } = this.state;
    // const TopLevelNavigator = stores.secretPhraseStore.walletExist ? PrivateNavigator : PublicNavigator;
    return (
      <View style={{ flex: 1, backgroundColor: "#121212" }}>
        <Provider {...stores}>
          <React.Fragment>
            <StatusBar backgroundColor="#000" barStyle="light-content" />
            <StyleProvider style={getTheme(platform)}>
              <SwitchNavigator
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
