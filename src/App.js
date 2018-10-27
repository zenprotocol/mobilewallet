import React, { Component } from "react";
import { Provider } from "mobx-react/native";
import { inject, observer } from "mobx-react";
import { StyleProvider } from "native-base";
import { Platform, View } from "react-native";
import * as stores from "./stores";
import NavigationService from "./services/NavigationService";
import getTheme from "../native-base-theme/components";
import Routes from "./routes";
import platform from "../native-base-theme/variables/platform";
import StatusBar from './components/StatusBar.js';

// TODO:  Check for SafeAreaView for android
// <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>

const TopLevelNavigator = Routes;

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="#000" barStyle="light-content" />
        <Provider {...stores}>
          <StyleProvider style={getTheme(platform)}>
            <TopLevelNavigator
              ref={navigatorRef => {
                NavigationService.setTopLevelNavigator(navigatorRef);
              }}
            />
          </StyleProvider>
        </Provider>
      </View>
    );
  }
}
