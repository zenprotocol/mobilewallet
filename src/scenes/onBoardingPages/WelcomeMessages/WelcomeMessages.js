import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StatusBar,
  Image,
  StyleSheet,
} from 'react-native';

import AppIntroSlider from 'react-native-app-intro-slider';

import { BLOCKCHAIN_SRC, WALLET_SRC, SECURITY_SRC, ATTENTION_SRC } from '../../../constants/imgSources';

const pageTexts = [
  {
    imgSrc: BLOCKCHAIN_SRC,
    title: 'What is Zen Protocol?',
    bullets: [
      'Zen Protocol (ZP) is a platform for peer-2-peer finance.',
      'ZP wallet is a free, open-source client interface.',
      'ZP allows you to interact with the blockchain',
      'Be in full control of your keys & funds without relying on banks or exchanges.',
    ],
  },
  {
    imgSrc: WALLET_SRC,
    title: 'How does the ZP wallet work?',
    description: 'We care about your safety ­– so please read the following:',
    bullets: [
      'When creating a wallet on Zen Protocol you are generating a cryptographic set of 24 words, a mnemonic passphrase (seed) and your public address.',
      'If you send your public address to someone, they can send you Zen or other assets.',
      'NEVER share your seed or wallet file– these allow anyone holding them complete control over assets in the wallet, including sending these assets.',
      'The developers of this software have no access to your passphrase or seed. If you forget your password or lose your seed, we cannot recover it for you. Make sure to keep a copy of your seed in a secure place.',
    ],
  },
  {
    imgSrc: SECURITY_SRC,
    title: 'Zen Protocol Seed & Passwords',
    description: 'We care about your safety ­– so please read the following:',
    bullets: [
      'Keep your seed and password safe.',
      'Make backups of your seed.',
      'Be aware of phishing websites or programs.',
    ],
  },
  {
    imgSrc: ATTENTION_SRC,
    title: 'Only YOU are in control',
    description: 'We care about your safety ­– so please read the following:',
    bullets: [
      'You are responsible for your own security.',
      'No one can recover or change your private seed.',
      'No one can recover your password.',
      'No one can refund your transactions.',
      'No one can freeze your accounts.',
    ],
  },
]

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  }
});

const slides = [
  {
    key: 'somethun',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    imageStyle: styles.image,
    backgroundColor: '#59b2ab',
  },
  {
    key: 'somethun-dos',
    title: 'Title 2fdfdf',
    text: 'Other cool stuff',
    imageStyle: styles.image,
    backgroundColor: '#febe29',
  },
  {
    key: 'somethun1',
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    imageStyle: styles.image,
    backgroundColor: '#22bcb5',
  }
];

export default class WelcomeMessages extends Component {
  render() {
    return (
      <View style={{ flex: 1, }}>
        <AppIntroSlider slides={slides}/>
      </View>
    )
  }
}
