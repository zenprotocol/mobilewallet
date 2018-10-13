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
export default class Home2Screen extends Component {
  constructor(props) {
    super(props);
  }

  nextScreen = () => {
    this.props.navigation.navigate('Home3');
  }
  backScreen = () => {
    this.props.navigation.navigate('Home1');
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
            Zen Protocol Seed & Passwords
          </Text>
          <Text style={styles.subHeaderText}>
            We care about your safety ­– so please read the following:
          </Text>

          <View style={styles.hrLine}></View>
          <View style={styles.blockChainImageView}>
            <Image style={styles.blockChainImage} source={require('../../assets/images/homescreen3.png')}/>
          </View>
          <View style={styles.bulletView}>
            <View style={styles.buttetTextView} />
            <Text style={styles.bulletText}>
              Keep your seed and password safe.
            </Text>
          </View>
          <View style={styles.bulletView}>
            <View style={styles.buttetTextView} />
            <Text style={styles.bulletText}>
              Make backups of your seed.
            </Text>
          </View>
          <View style={styles.bulletView}>
            <View style={styles.buttetTextView} />
            <Text style={styles.bulletText}>
              Be aware of phishing websites or programs.
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
