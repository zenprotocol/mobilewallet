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