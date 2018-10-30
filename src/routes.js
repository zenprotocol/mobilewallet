import { createStackNavigator, createDrawerNavigator } from "react-navigation";

import WelcomeMessages from "./scenes/onBoardingPages/WelcomeMessages/WelcomeMessages";
import ImportOrCreateWallet from "./scenes/onBoardingPages/ImportOrCreateWallet/ImportOrCreateWallet";
import ImportWallet from "./scenes/onBoardingPages/ImportWallet/ImportWallet";
import SecretPhrase from "./scenes/onBoardingPages/SecretPhrase/SecretPhrase";
import SetPassword from "./scenes/onBoardingPages/SetPassword/SetPassword";
import TermsOfService from "./scenes/onBoardingPages/TermsOfService/TermsOfService";
import Portfolio from "./scenes/Portfolio/Portfolio";
import Settings from "./scenes/Settings/Settings";
import UnLockWallet from "./scenes/UnlockWallet/UnlockWallet";
import ForgotPassword from "./scenes/ForgotPassword/ForgotPassword";

// const stackNavigatorConfig = {
//   initialRouteName: "WelcomeMessages",
//   headerMode: "none",
//   navigationOptions: {
//     headerStyle: { backgroundColor: "#E73536" },
//     title: "You are not logged in",
//     headerTintColor: "white"
//     // header: ({ state }) => {
//     //   return { title: state.params && state.params.title }
//     // }
//   }
// };

const Navigator = createStackNavigator(
  {
    WelcomeMessages: { screen: WelcomeMessages },
    ImportOrCreateWallet: { screen: ImportOrCreateWallet },
    SecretPhrase: { screen: SecretPhrase },
    ImportWallet: { screen: ImportWallet },
    SetPassword: { screen: SetPassword },
    TermsOfService: { screen: TermsOfService },
    UnLockWallet: { screen: UnLockWallet },
    ForgotPassword: { screen: ForgotPassword }
  },
  {
    headerMode: "none",
    initialRouteName: "WelcomeMessages"
  }
);

// const Navigator = StackNavigator(
//   {
//     welcomeStack: { screen: WelcomeStack },
//     drawerStack: { screen: DrawerNavigation }
//   },
//   {
//     headerMode: "none",
//     initialRouteName: "WelcomeMessages"
//   }
// );

// const WelcomeStack = StackNavigator(
//   {
//     WelcomeMessages: { screen: WelcomeMessages },
//     ImportOrCreateWallet: { screen: ImportOrCreateWallet },
//     SecretPhrase: { screen: SecretPhrase },
//     ImportWallet: { screen: ImportWallet },
//     SetPassword: { screen: SetPassword },
//     TermsOfService: { screen: TermsOfService }
//   },
//   {
//     headerMode: "none",
//     initialRouteName: "WelcomeMessages"
//   }
// );

// const DrawerNavigation = StackNavigator(
//   {
//     DrawerStack: { screen: DrawerStack }
//   },
//   {
//     headerMode: "float",
//     navigationOptions: ({ navigation }) => ({
//       headerStyle: { backgroundColor: "#4C3E54" },
//       title: "Welcome!",
//       headerTintColor: "white"
//     })
//   }
// );

// const DrawerStack = DrawerNavigator({
//   Portfolio: {
//     screen: Portfolio
//   },
//   Settings: {
//     screen: Settings
//   }
// });

// const AppDrawer = createDrawerNavigator({})

// createBottomTabNavigator

export default Navigator;
