import React, { Component } from 'react';
import { Container, Content, H1 } from 'native-base';
import {
  View,
  FlatList,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import Images from '@assets/images';
import NetBottomBar from '../../../components/NetBottomBar'

export default class ImportOrCreateWallet extends Component {

  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <H1>Import Or Create Wallet</H1>
      </View>
    )
  }
}

const styles = StyleSheet.create({
});
