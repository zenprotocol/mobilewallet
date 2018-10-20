import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { observer, inject } from 'mobx-react/native';
import { StackNavigator } from 'react-navigation';

import WelcomeMessages from './scenes/onBoardingPages/WelcomeMessages/WelcomeMessages'
import ImportOrCreateWallet from './scenes/onBoardingPages/ImportOrCreateWallet/ImportOrCreateWallet'

const stackNavigatorConfig = {
  initialRouteName: 'WelcomeMessages',
  navigationOptions: {
    header: ({state}) => {
      return {title: state.params && state.params.title}
    }
  }
};

const Navigator = StackNavigator(
  {
    WelcomeMessages: { screen: WelcomeMessages },
    ImportOrCreateWallet: { screen: ImportOrCreateWallet },
  },
  {
    stackNavigatorConfig,
  }
)

export default Navigator;
