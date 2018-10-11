/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './scenes/Home';
import Home1Screen from './scenes/Home1';
import Home2Screen from './scenes/Home2';
import Home3Screen from './scenes/Home3';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <RootStack />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

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