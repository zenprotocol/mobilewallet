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
              <Text>Send</Text>
            </Button>
            <Button vertical onPress={() => navigate('ReceiveTx')}>
              <Text>ReceiveTx</Text>
            </Button>
            <Button vertical onPress={() => navigate('Portfolio')}>
              <Text>Portfolio</Text>
            </Button>
          </FooterTab>
        </Footer>

    )
  }
}

export default FooterTabs;
