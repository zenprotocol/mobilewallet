import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions
} from 'react-native';
const { height, width } = Dimensions.get('window');

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

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#131313',
    flex: 1,
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    marginTop: 20,
    fontWeight: 'bold',
    marginLeft: 10
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
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  touchableButton: {
    width: 120,
    height: 36,
    borderWidth: 1,
    backgroundColor: '#2e8be6',
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
    width: 190,
    height: 170
  }
});