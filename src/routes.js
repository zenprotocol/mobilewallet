import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { observer, inject } from "mobx-react/native";
import { StackNavigator } from "react-navigation";

import WelcomeMessages from "./scenes/onBoardingPages/WelcomeMessages/WelcomeMessages";
import ImportOrCreateWallet from "./scenes/onBoardingPages/ImportOrCreateWallet/ImportOrCreateWallet";
import ImportWallet from "./scenes/onBoardingPages/ImportWallet/ImportWallet";
import SecretPhrase from "./scenes/onBoardingPages/SecretPhrase/SecretPhrase";
import SetPassword from "./scenes/onBoardingPages/SetPassword/SetPassword";
import TermsOfService from "./scenes/onBoardingPages/TermsOfService/TermsOfService";

import Portfolio from "./scenes/Portfolio/Portfolio";

const stackNavigatorConfig = {
  initialRouteName: "WelcomeMessages",
  navigationOptions: {
    header: ({ state }) => ({ title: state.params && state.params.title })
  }
};

const Navigator = StackNavigator(
  {
    WelcomeMessages: { screen: WelcomeMessages },
    ImportOrCreateWallet: { screen: ImportOrCreateWallet },
    SecretPhrase: { screen: SecretPhrase },
    ImportWallet: { screen: ImportWallet },
    SetPassword: { screen: SetPassword },
    TermsOfService: { screen: TermsOfService }
  },
  {
    stackNavigatorConfig
  }
);

// const AppDrawer = createDrawerNavigator({})

// createBottomTabNavigator

export default Navigator;
