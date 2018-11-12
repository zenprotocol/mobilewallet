// @flow

import React, { Component } from "react";
import { View } from 'react-native';
import { Button, Icon, Footer, FooterTab, Text } from "native-base";

import styles from './styles';

type Props = {};

class FooterTabs extends React.Component<Props> {

  render() {
    const { navigate } = this.props.navigation;
    return (
        <Footer>
          <FooterTab style={styles.main}>
            <Button vertical onPress={() => navigate('SendTx')}>
              <Icon ios="ios-send" android="md-send" />
              <Text>Send</Text>
            </Button>
            <Button vertical onPress={() => navigate('ReceiveTx')}>
              <Icon ios="ios-log-in" android="md-log-in" />
              <Text>ReceiveTx</Text>
            </Button>
            <Button vertical onPress={() => navigate('Portfolio')}>
              <Icon ios="ios-document" android="md-document" />
              <Text>Portfolio</Text>
            </Button>
          </FooterTab>
        </Footer>

    )
  }
}

export default FooterTabs;
