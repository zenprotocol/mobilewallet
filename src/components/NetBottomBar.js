// @flow

import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { View } from 'react-native';
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
    let value =  networkStore.chain;
    this.setState({
      networkChain: value,
    });
  }

  get style() {
    const { networkStore: { chain } } = this.props;
    return {
      borderColor: '#232323',
      backgroundColor: chain === MAINNET ? '#121212' : 'rgb(231, 145, 75)',
      color: 'white',
      fontWeight: chain === MAINNET ? 'inherit' : 'bold',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      borderTopWidth: 1,
    };
  }

  changeNetwork(value) {
    console.log(value);
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
        <Text style={{color:'white'}}>
          MAINNET
        </Text>
        <Button transparent onPress={() => this.changeNetwork('test')}>
          <Text style={{color:'white'}}>
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
          <Text style={{color:'white'}}>(Switch to Mainnet)</Text>
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
