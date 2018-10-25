import React, { Component } from "react";
import { Provider } from "mobx-react/native";
import { inject, observer } from "mobx-react";
import { StyleProvider } from "native-base";
import { Platform, View, StatusBar } from "react-native";
import * as stores from "./stores";
import NavigationService from "./services/NavigationService";
import getTheme from "../native-base-theme/components";
import Routes from "./routes";
import platform from "../native-base-theme/variables/platform";

const TopLevelNavigator = Routes;

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
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
