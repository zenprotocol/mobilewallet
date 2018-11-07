// @flow

import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import PortfolioStore from '../../stores/portfolioStore';
import SendTxStore from '../../stores/sendTxStore';
import { View } from 'react-native';
import { Text, H1, H2, H3, Card, CardItem, Left, Right, Button, Icon, Body } from 'native-base';
import Layout from '../../components/Layout';

type Props = {
  portfolioStore: PortfolioStore,
  sendTxStore: SendTxStore
};

@inject('portfolioStore', 'sendTxStore')
@observer
class Portfolio extends Component<Props> {

  // TODO: move into Mobx app.portfolioStore.fetch
  componentDidMount() {
    this.props.portfolioStore.fetch();
  }

  render() {
    const { portfolioStore } = this.props
    return (
      <Layout>
        <H1 style={{color: 'white', marginBottom: 10}}>Portfolio</H1>

        { portfolioStore.assets.length ?
          portfolioStore.assets.map(asset => (
            <Card style={{flex: 0}}>
                <CardItem>
                  <Left>
                    <Body>
                      <H1 style={{color: 'white'}}>{asset.name}</H1>
                      <Text note>{asset.asset}</Text>
                    </Body>
                  </Left>
                  <Right>
                    <Icon ios="ios-send" android="md-send"/>
                  </Right>
                </CardItem>
                <CardItem>
                  <Left>
                    <Body>
                      <H2 note style={{color: '#2cb1df'}}>{asset.balanceDisplay}</H2>
                    </Body>
                  </Left>
                </CardItem>
              </Card>
            ))
          :
          <H3 style={{color: '#fff'}}>There is not assets yet</H3>
        }

      </Layout>
    )
  }

}

export default Portfolio;
