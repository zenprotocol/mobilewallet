// @flow

import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import PortfolioStore from '../../stores/portfolioStore';
import SendTxStore from '../../stores/sendTxStore';
import { View, Text } from 'react-native';

type Props = {
  portfolioStore: PortfolioStore,
  sendTxStore: SendTxStore
};

@inject('portfolioStore', 'sendTxStore')
@observer
class Portfolio extends Component<Props> {

  componentDidMount() {
    this.props.portfolioStore.fetch();
  }

  render() {
    return (
      <View><Text>Portfolio</Text></View>
    )
  }

}

export default Portfolio;
