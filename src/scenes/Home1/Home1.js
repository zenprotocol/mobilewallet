import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StatusBar,
  Image,
  ScrollView
} from 'react-native';
import styles from './styles';

export default class Home1Screen extends Component {
  constructor(props) {
    super(props);
  }

  nextScreen = () => {
    this.props.navigation.navigate('Home2');
  }
  backScreen = () => {
    this.props.navigation.navigate('Home');
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <StatusBar backgroundColor="transparent"
                  barStyle="light-content" translucent/>
        <View style={styles.headerView}>
          <Image style={styles.headerLogoImage} source={require('../../assets/images/logo.png')}/>
        </View>
        <View style={styles.contentView}>
          <Text style={styles.headerText}>
            How does the ZP wallet work?
          </Text>
          <Text style={styles.subHeaderText}>
            We care about your safety ­– so please read the following:
          </Text>

          <View style={styles.hrLine}></View>
          <View style={styles.blockChainImageView}>
            <Image style={styles.blockChainImage} source={require('../../assets/images/homescreen2.png')}/>
          </View>
          <View style={styles.bulletView}>
            <View style={styles.buttetTextView} />
            <Text style={styles.bulletText}>
              When creating a wallet on Zen Protocol you are generating a cryptographic set of 24 words, a mnemonic passphrase (seed) and your public address.
            </Text>
          </View>
          <View style={styles.bulletView}>
            <View style={styles.buttetTextView} />
            <Text style={styles.bulletText}>
              If you send your public address to someone, they can send you Zen or other assets.
            </Text>
          </View>
          <View style={styles.bulletView}>
            <View style={styles.buttetTextView} />
            <Text style={styles.bulletText}>
              NEVER share your seed or wallet file– these allow anyone holding them complete control over assets in the wallet, including sending these assets.
            </Text>
          </View>
          <View style={styles.bulletView}>
            <View style={styles.buttetTextView} />
            <Text style={styles.bulletText}>
              The developers of this software have no access to your passphrase or seed. If you forget your password or lose your seed, we cannot recover it for you. Make sure to keep a copy of your seed in a secure place.
            </Text>
          </View>
          <View style={styles.hrLine}></View>
          <View style={styles.nextButtonView}>
            <TouchableHighlight onPress={this.backScreen} style={[styles.touchableButton, styles.backButton]}>
              <Text style={styles.nextButtonText}>Back</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={this.nextScreen} style={[styles.touchableButton, styles.nextButton]}>
              <Text style={styles.nextButtonText}>Next</Text>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    );
  }
}
