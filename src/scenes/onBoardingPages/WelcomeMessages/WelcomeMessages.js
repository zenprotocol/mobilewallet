import React, { Component } from 'react';
import { Container, Content, H1 } from 'native-base';
import {
  View,
  FlatList,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Images from '@assets/images';
import NetBottomBar from '../../../components/NetBottomBar'


const slides = [
  {
    key: 'what',
    image: Images.blockchainSrc,
    title: 'What is Zen Protocol?',
    bullets: [
      'Zen Protocol (ZP) is a platform for peer-2-peer finance.',
      'ZP wallet is a free, open-source client interface.',
      'ZP allows you to interact with the blockchain',
      'Be in full control of your keys & funds without relying on banks or exchanges.',
    ],
    backgroundColor: '#121212',
  },
  {
    key: 'how',
    image: Images.walletSrc,
    title: 'How does the ZP wallet work?',
    text: 'We care about your safety ­– so please read the following:',
    bullets: [
      'When creating a wallet on Zen Protocol you are generating a cryptographic set of 24 words, a mnemonic passphrase (seed) and your public address.',
      'If you send your public address to someone, they can send you Zen or other assets.',
      'NEVER share your seed or wallet file– these allow anyone holding them complete control over assets in the wallet, including sending these assets.',
      'The developers of this software have no access to your passphrase or seed. If you forget your password or lose your seed, we cannot recover it for you. Make sure to keep a copy of your seed in a secure place.',
    ],
    backgroundColor: '#121212',
  },
  {
    key: 'seed_and_passwords',
    image: Images.securitySrc,
    title: 'Zen Protocol Seed & Passwords',
    text: 'We care about your safety ­– so please read the following:',
    bullets: [
      'Keep your seed and password safe.',
      'Make backups of your seed.',
      'Be aware of phishing websites or programs.',
    ],
    backgroundColor: '#121212',
  },
  {
    key: 'control',
    image: Images.attentionSrc,
    title: 'Only YOU are in control',
    text: 'We care about your safety ­– so please read the following:',
    bullets: [
      'You are responsible for your own security.',
      'No one can recover or change your private seed.',
      'No one can recover your password.',
      'No one can refund your transactions.',
      'No one can freeze your accounts.',
    ],
    backgroundColor: '#121212',
  },
]

export default class WelcomeMessages extends Component {

  static navigationOptions = {
    header: null,
  }

  renderSlideItem = props => (
    <Container
      style={[styles.mainContent, {
        paddingTop: props.topSpacer + 40,
        paddingBottom: props.bottomSpacer,
        width: props.width,
        height: props.height
      }]}>
      <Content>
        <H1 style={styles.title}>{props.title}</H1>
        <Image source={props.image} style={styles.image} resizeMode="contain"/>
        <FlatList
          data={props.bullets}
          keyExtractor = {(item, index) => index}
          renderItem={({item}) =>
            <View style={styles.item}>
              <Text style={styles.bullet}>{'\u2022'}</Text>
              <Text style={styles.text}>{item}</Text>
            </View>
          }
        />
      </Content>
    </Container>
  );

  render() {
    return (
      <View style={{flex: 1}}>
        <AppIntroSlider
          slides={slides}
          renderItem={this.renderSlideItem}
          bottomButton
          buttonStyle={styles.button}
          />
        <NetBottomBar/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContent: {
    backgroundColor: '#121212',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    flex:1,
    alignSelf: 'center',
    height: 150,
    width: 150,
    marginBottom: 16,
  },
  item: {
    flexDirection: 'row',
    padding: 10,
  },
  bullet: {
    color: '#2f8be6',
    fontSize: 12,
  },
  text: {
    color: '#777777',
    fontSize: 16,
    paddingLeft: 5,
  },
  title: {
    fontSize: 22,
    color: '#e6e6e6',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#2f8be6',
  },
});
