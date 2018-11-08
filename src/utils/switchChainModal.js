import { Alert } from "react-native";
import { networkStore, secretPhraseStore } from "../stores";
import chain from "../services/chain";
import NavigationService from "../services/NavigationService";
import { inject, observer } from "mobx-react";

const submitSwitchChain = async () => {
  await chain.switch();
  NavigationService.navigate("Loading");
  await networkStore.changeChain();
  await secretPhraseStore.checkWalletExist();
  await secretPhraseStore.reset();
};

const shouldSwitchModal = () => {
  console.log("==========shouldSwitchModal================");
  console.log(networkStore.chain);
  const subTitle = `Switch from ${networkStore.chain} net to ${networkStore.otherChain} net? (Continuing will redirect you to the loading screen)`;
  Alert.alert(
    "Confirm switching chain",
    subTitle,
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => submitSwitchChain() }
    ],
    { cancelable: false }
  );
}

const switchChain = async () => {
  await shouldSwitchModal();
};

export default switchChain;
