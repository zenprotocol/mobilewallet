import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';
const { width } = Dimensions.get('window');

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

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#131313',
    flex: 1,
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10
  },
  subHeaderText: {
    color: '#949494',
    fontSize: 12,
    marginLeft: 10,
    marginRight: 10
  },
  bulletText: {
    color: '#6c6c6c',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 7,
    marginRight: 20
  },
  headerView: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#171717',
    marginTop: 20
  },
  headerLogoImage: {
    width: 215,
  },
  contentView: {
    flex: 1
  },
  hrLine: {
    height: 1,
    width: width,
    backgroundColor: '#777',
    opacity: 0.5,
    marginTop: 5,
    marginBottom: 5,
  },
  bulletView: {
    flexDirection: 'row',
    marginBottom: 5,
    marginRight: 10
  },
  buttetTextView: {
    width: 10,
    height: 10,
    backgroundColor: '#2e8be6',
    borderRadius: 5,
    margin: 10
  },
  nextButtonView: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  nextButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  touchableButton: {
    width: 120,
    height: 36,
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  blockChainImageView: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  blockChainImage: {
    width: 170,
    height: 140
  },
  backButton: {
    backgroundColor: '#333'
  },
  nextButton: {
    backgroundColor: '#2e8be6'
  },
});