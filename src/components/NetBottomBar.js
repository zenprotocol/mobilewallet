// @flow

import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import { MAINNET } from '../services/chain';
import NetworkStore from '../stores/networkStore';
import switchChain from '../utils/switchChainModal';
import Icon from 'react-native-vector-icons/Foundation';
import {
  View,
  StyleSheet,
} from 'react-native';
import { Button, Text } from 'native-base';

type Props = {
  networkStore: NetworkStore,
  isSidebar?: boolean,
  width?: number
};

@inject('networkStore')
@observer
class NetBottomBar extends Component<Props> {
  render() {
    const { networkStore } = this.props
    console.log('networkStore.chain', networkStore.chain)
    return networkStore.chain === MAINNET ? this.renderMainnetBar() : this.renderTestnetBar()
  }

  renderMainnetBar() {
    if (this.props.isSidebar) {
      return null
    }
    return (
      <View style={this.style}>
        <Text>MAINNET <Button transparent onPress={switchChain}>(Switch to Testnet)</Button></Text>
      </View>
    )
  }

  renderTestnetBar() {
    return (
      <View style={this.style}>
        <Text style={{color: 'white'}}><Icon name="alert"/> TESTNET </Text>
        <Button transparent dark onPress={switchChain}><Text>(Switch to Mainnet)</Text></Button>
      </View>
    )
  }

  get style() {
    const { width, networkStore: { chain } } = this.props
    return {
      backgroundColor: chain === MAINNET ? 'rgba(18, 18, 18, 0.1)' : '#f68b3d',
      color: 'white',
      fontWeight: chain === MAINNET ? 'inherit' : 'bold',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
    }
  }

}

export default NetBottomBar
