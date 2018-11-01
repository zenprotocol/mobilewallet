import React, { Component } from "react";
import { Provider } from "mobx-react/native";
import { inject, observer } from "mobx-react";
import { StyleProvider } from "native-base";
import { Platform, View } from "react-native";
import * as stores from "./stores";
import NavigationService from "./services/NavigationService";
import getTheme from "../native-base-theme/components";
import {PublicNavigator, PrivateNavigator} from "./routes";
import platform from "../native-base-theme/variables/platform";
import StatusBar from './components/StatusBar.js';
import isWalletExists from './utils/isWalletExists';

// TODO:  Check for SafeAreaView for android
// <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>

export default class App extends Component {
  state = {
    walletExists: false,
  }

  async componentWillMount() {
    const walletExists = await isWalletExists();
    this.setState({
      walletExists: walletExists
    })
  }

  render() {
    const { walletExists } = this.state;
    const TopLevelNavigator = walletExists ? PrivateNavigator : PublicNavigator;
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
