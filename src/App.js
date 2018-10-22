import React, {Component} from 'react';
import * as stores from './stores'
import { Provider } from 'mobx-react/native';
import { StyleProvider } from 'native-base';
import getTheme from '../native-base-theme/components';
import Routes from './routes';
import platform from '../native-base-theme/variables/platform';
import {
  Platform,
  View,
  StatusBar
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, }}>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="#4F6D7A"
          />
          <Provider {...stores}>
            <StyleProvider style={getTheme(platform)}>
              <Routes />
            </StyleProvider>
          </Provider>
      </View>
    );
  }
}
