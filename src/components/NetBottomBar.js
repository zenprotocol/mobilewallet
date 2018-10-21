// @flow

import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import {
  View,
} from 'react-native';
import { Button, Text } from 'native-base';
import Icon from 'react-native-vector-icons/Foundation';
import { MAINNET } from '../services/chain';
import NetworkStore from '../stores/networkStore';
import switchChain from '../utils/switchChainModal';

type Props = {
  networkStore: NetworkStore,
  isSidebar?: boolean,
  width?: number
};

@inject('networkStore')
@observer
class NetBottomBar extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      networkChain: '',
    };
  }

  componentDidMount() {
    const { networkStore } = this.props;
    networkStore.chain.then((value) => {
      this.setState({
        networkChain: value,
      });
      return value;
    });
  }

  get style() {
    const { networkStore: { chain } } = this.props;
    return {
      backgroundColor: chain === MAINNET ? 'rgba(18, 18, 18, 0.1)' : '#f68b3d',
      color: 'white',
      fontWeight: chain === MAINNET ? 'inherit' : 'bold',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
    };
  }

  changeNetwork(value) {
    this.setState({
      networkChain: value,
    });
    switchChain();
  }

  renderMainnetBar() {
    const { isSidebar } = this.props;
    if (isSidebar) {
      return null;
    }
    return (
      <View style={this.style}>
        <Text>
          MAINNET
        </Text>
        <Button transparent onPress={() => this.changeNetwork('test')}>
          <Text>
            (Switch to Testnet)
          </Text>
        </Button>
      </View>
    );
  }

  renderTestnetBar() {
    return (
      <View style={this.style}>
        <Text style={{ color: 'white' }}>
          <Icon name="alert" />
          TESTNET
        </Text>
        <Button transparent dark onPress={() => this.changeNetwork('main')}>
          <Text>(Switch to Mainnet)</Text>
        </Button>
      </View>
    );
  }

  render() {
    const { networkChain } = this.state;
    return networkChain === 'main' ? this.renderMainnetBar() : this.renderTestnetBar();
  }
}

export default NetBottomBar;
