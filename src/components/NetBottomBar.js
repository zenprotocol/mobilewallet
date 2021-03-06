// @flow

import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { View, AsyncStorage } from "react-native";
import { Button, Text } from "native-base";
import Icon from "react-native-vector-icons/Foundation";
import { MAINNET } from "../services/chain";
import NetworkStore from "../stores/networkStore";
import switchChain from "../utils/switchChainModal";

type Props = {
  networkStore: NetworkStore,
  isSidebar?: boolean,
  width?: number
};

@inject("networkStore")
@observer
class NetBottomBar extends Component<Props> {

  get style() {
    const { width, networkStore: { chain } } = this.props
    return {
      borderColor: "#232323",
      backgroundColor: chain === MAINNET ? "#121212" : "rgb(231, 145, 75)",
      color: "white",
      fontWeight: chain === MAINNET ? "inherit" : "bold",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      borderTopWidth: 1
    };
  }

  renderMainnetBar() {
    const { isSidebar } = this.props;
    if (isSidebar) {
      return null;
    }
    return (
      <View style={this.style}>
        <Text style={{ color: "white" }}>MAINNET</Text>
        <Button transparent onPress={() => switchChain(this.props)}>
          <Text style={{ color: "white" }}>(Switch to Testnet)</Text>
        </Button>
      </View>
    );
  }

  clearAsyncStorage = async () => {
    console.log("Clear Storage");
    AsyncStorage.clear();
  }

  renderTestnetBar() {
    return (
      <View style={this.style}>
        <Button onPress={this.clearAsyncStorage}>
          <Text style={{color: '#fff'}}>Clear Async Storage</Text>
        </Button>
        { /*<Text style={{ color: "white" }}>
          <Icon name="alert" />
          TESTNET
        </Text> */}
        <Button transparent dark onPress={() => switchChain(this.props)}>
          <Text style={{ color: "white" }}>(Switch to Mainnet)</Text>
        </Button>
      </View>
    );
  }

  render() {
    const { networkStore } = this.props;
    console.log('networkStore.chain', networkStore.chain);
    return networkStore.chain === MAINNET ? this.renderMainnetBar() : this.renderTestnetBar()
  }
}

export default NetBottomBar;
