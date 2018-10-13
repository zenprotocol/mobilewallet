import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StatusBar,
  Image,
} from 'react-native';
import styles from './styles';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  changeScreen = () => {
    this.props.navigation.navigate('Home1');
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="transparent"
                  barStyle="light-content" translucent/>
        <View style={styles.headerView}>
          <Image style={styles.headerLogoImage} source={require('../../assets/images/logo.png')}/>
        </View>
        <View style={styles.contentView}>
          <Text style={styles.headerText}>
            What is Zen Protocol?
          </Text>
          <View style={styles.hrLine}></View>
          <View style={styles.blockChainImageView}>
            <Image style={styles.blockChainImage} source={require('../../assets/images/homescreen1.png')}/>
          </View>
          <View style={styles.bulletView}>
            <View style={styles.buttetTextView} />
            <Text style={styles.bulletText}>
              Zen Protocol (ZP) is a platform for peer-2-peer finance.
            </Text>
          </View>
          <View style={styles.bulletView}>
            <View style={styles.buttetTextView} />
            <Text style={styles.bulletText}>
              ZP wallet is a free, open-source client interface.
            </Text>
          </View>
          <View style={styles.bulletView}>
            <View style={styles.buttetTextView} />
            <Text style={styles.bulletText}>
              ZP allows you to interact with the blockchain
            </Text>
          </View>
          <View style={styles.bulletView}>
            <View style={styles.buttetTextView} />
            <Text style={styles.bulletText}>
              Be in full control of your keys & funds without relying on banks or exchanges.
            </Text>
          </View>
          <View style={styles.hrLine}></View>
          <View style={styles.nextButtonView}>
            <TouchableHighlight onPress={this.changeScreen} style={styles.touchableButton}>
              <Text style={styles.nextButtonText}>Next</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

