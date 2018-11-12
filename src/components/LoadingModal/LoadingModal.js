import React, { Component } from 'react';
import { Container, Header, Content, Spinner } from 'native-base';
import {Modal, TouchableHighlight, View} from 'react-native';
import styles from './styles';

const LoadingModal = props => {

  state = {
    isLoading,
    ...attributes
  } = props;

  return (
    <Modal
      transparent
      animationType={'none'}
      visible={isLoading}
      onRequestClose={() => { console.log('Noop'); }}
    >
      <View style={styles.centerElm}>
        <Spinner/>
      </View>
    </Modal>

  )

}

export default LoadingModal;
