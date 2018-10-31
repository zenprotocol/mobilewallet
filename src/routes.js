import React, { Component } from "react";
import { Dimensions, View, Text, Button } from "react-native";
import { observer, inject } from "mobx-react/native";
import { StackNavigator, createDrawerNavigator } from "react-navigation";

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

export const PublicNavigator = StackNavigator(
  {
    WelcomeMessages: { screen: WelcomeMessages },
    ImportOrCreateWallet: { screen: ImportOrCreateWallet },
    SecretPhrase: { screen: SecretPhrase },
    ImportWallet: { screen: ImportWallet },
    SetPassword: { screen: SetPassword },
    TermsOfService: { screen: TermsOfService },
    Loading: { screen: Loading },
    UnlockWallet: { screen: UnlockWallet }
  },
  {
    initialRouteName: "WelcomeMessages",
    navigationOptions: {}
  }
);

export const PrivateNavigator = StackNavigator(
  {
    Portfolio: { screen: ReceiveTx },
    UnlockWallet: { screen: UnlockWallet },
    ImportOrCreateWallet: { screen: ImportOrCreateWallet },
    SecretPhrase: { screen: SecretPhrase },
    ImportWallet: { screen: ImportWallet },
    SetPassword: { screen: SetPassword },
    TermsOfService: { screen: TermsOfService },
    Loading: { screen: Loading },
  },
  {
    initialRouteName: "UnlockWallet",
    navigationOptions: {}
  }
);

export const AppDrawer = createDrawerNavigator(
  {
    Portfolio: { screen: Portfolio },
  },
  {
    drawerWidth: deviceWidth - 50,
    drawerPosition: "left",
  }
)

// createBottomTabNavigator
