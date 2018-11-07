import React, { Component } from "react";
import { Dimensions, View, Text, Button } from "react-native";
import { observer, inject } from "mobx-react/native";
import { StackNavigator, createDrawerNavigator, createStackNavigator, createSwitchNavigator } from "react-navigation";

import LoadingApp from "./LoadingApp";

import WelcomeMessages from "./scenes/onBoardingPages/WelcomeMessages/WelcomeMessages";
import ImportOrCreateWallet from "./scenes/onBoardingPages/ImportOrCreateWallet/ImportOrCreateWallet";
import ImportWallet from "./scenes/onBoardingPages/ImportWallet/ImportWallet";
import SecretPhrase from "./scenes/onBoardingPages/SecretPhrase/SecretPhrase";
import TermsOfService from "./scenes/onBoardingPages/TermsOfService/TermsOfService";
import SetPassword from "./scenes/onBoardingPages/SetPassword/SetPassword";
import Loading from "./scenes/Loading/Loading";

import UnlockWallet from "./scenes/UnlockWallet/UnlockWallet";
import Portfolio from "./scenes/Portfolio/Portfolio";
import Settings from "./scenes/Settings/Settings";
import SendTx from './scenes/SendTx/SendTx';
import ReceiveTx from "./scenes/ReceiveTx/ReceiveTx";

const deviceWidth = Dimensions.get("window").width;

const PublicNavigator = createStackNavigator(
  {
    WelcomeMessages: { screen: WelcomeMessages },
    ImportOrCreateWallet: { screen: ImportOrCreateWallet },
    SecretPhrase: { screen: SecretPhrase },
    ImportWallet: { screen: ImportWallet },
    SetPassword: { screen: SetPassword },
    TermsOfService: { screen: TermsOfService },
    Loading: { screen: Loading },
    UnlockWallet: { screen: UnlockWallet },
  },
  {
    initialRouteName: "WelcomeMessages",
    navigationOptions: {}
  }
);

const PrivateNavigator = createStackNavigator(
  {
    Portfolio: { screen: Portfolio },
    UnlockWallet: { screen: UnlockWallet },
    Loading: { screen: Loading },
    ReceiveTx: { screen: ReceiveTx },
    SendTx: {screen: SendTx },
  },
  {
    initialRouteName: "UnlockWallet",
    headerMode: 'none',
    headerTitleStyle: {color: 'white',},
  }
);

export const SwitchNavigator = createSwitchNavigator(
  {
    Private: PrivateNavigator,
    Public: PublicNavigator,
    LoadingApp: LoadingApp
  },
  {
    initialRouteName: "LoadingApp",
  }
);

// export const AppDrawer = createDrawerNavigator(
//   {
//     Portfolio: { screen: Portfolio },
//   },
//   {
//     drawerWidth: deviceWidth - 50,
//     drawerPosition: "left",
//   }
// )

// createBottomTabNavigator
