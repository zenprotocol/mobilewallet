import React, { Component } from "react";
import { Provider } from "mobx-react/native";
import { inject, observer } from "mobx-react";
import { autorun, useStrict } from 'mobx';
import { StyleProvider } from "native-base";
import { Platform, View } from "react-native";
import SplashScreen from "react-native-splash-screen";
import platform from "../native-base-theme/variables/platform";
import * as stores from "./stores";
import NavigationService from "./services/NavigationService";
import getTheme from "../native-base-theme/components";
import { SwitchNavigator } from "./routes";
import StatusBar from './components/StatusBar.js';

// autorun('NavigationStore State', () => {
//   console.log('navigationState', stores.nav.navigationState);
//   console.log('current state', stores.nav.state);
// });

@observer
export default class App extends Component {

  componentDidMount() {
      
  }

  render() {
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
