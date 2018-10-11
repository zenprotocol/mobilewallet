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

export default class Home3Screen extends Component {
  constructor(props) {
    super(props);
  }

  nextScreen = () => {
    this.props.navigation.navigate('Home4');
  }
  backScreen = () => {
    this.props.navigation.navigate('Home2');
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
            Only YOU are in control
          </Text>
          <Text style={styles.subHeaderText}>
            We care about your safety ­– so please read the following:
          </Text>

          <View style={styles.hrLine}></View>
          <View style={styles.blockChainImageView}>
            <Image style={styles.blockChainImage} source={require('../../assets/images/homescreen4.png')}/>
          </View>
          <View style={styles.bulletView}>
            <View style={styles.buttetTextView} />
            <Text style={styles.bulletText}>
              You are responsible for your own security.
            </Text>
          </View>
          <View style={styles.bulletView}>
            <View style={styles.buttetTextView} />
            <Text style={styles.bulletText}>
              No one can recover or change your private seed.
            </Text>
          </View>
          <View style={styles.bulletView}>
            <View style={styles.buttetTextView} />
            <Text style={styles.bulletText}>
              No one can recover your password.
            </Text>
          </View>
          <View style={styles.bulletView}>
            <View style={styles.buttetTextView} />
            <Text style={styles.bulletText}>
              No one can refund your transactions.
            </Text>
          </View>
          <View style={styles.bulletView}>
            <View style={styles.buttetTextView} />
            <Text style={styles.bulletText}>
              No one can freeze your accounts.
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
    marginTop: 10
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
    width: 140,
    height: 160
  },
  backButton: {
    backgroundColor: '#333'
  },
  nextButton: {
    backgroundColor: '#2e8be6'
  },
});