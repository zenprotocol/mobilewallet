import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { observer, inject } from 'mobx-react/native';
import { StackNavigator } from 'react-navigation';

import WelcomeMessages from './scenes/onBoardingPages/WelcomeMessages/WelcomeMessages'


const stackNavigatorConfig = {
  initialRouteName: 'WelcomeMessages',
};
const Navigator = StackNavigator(
  {
    WelcomeMessages: { screen: WelcomeMessages },
  },
  {
    stackNavigatorConfig,
  }
)

export default Navigator;
