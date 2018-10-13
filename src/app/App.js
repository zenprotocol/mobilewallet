/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  StatusBar
} from 'react-native';

import { Provider } from 'mobx-react';
import * as stores from '../stores';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../scenes/Home';
import Home1Screen from '../scenes/Home1';
import Home2Screen from '../scenes/Home2';
import Home3Screen from '../scenes/Home3';

export default class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <View style={{ flex: 1, }}>
          <StatusBar
            barStyle="light-content"
            backgroundColor="#4F6D7A"
          />
          <RootStack />
        </View>
      </Provider>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Home',
        header: null
      },
    },
    Home1: {
      screen: Home1Screen,
      navigationOptions: {
        title: 'Home1',
        header: null
      },
    },
    Home2: {
      screen: Home2Screen,
      navigationOptions: {
        title: 'Home2',
        header: null
      },
    },
    Home3: {
      screen: Home3Screen,
      navigationOptions: {
        title: 'Home3',
        header: null
      },
    },
  },
  {
    initialRouteName: 'Home',
  }
);