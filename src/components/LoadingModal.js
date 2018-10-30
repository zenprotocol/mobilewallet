import React, { Component } from 'react';
import { Container, Header, Content, Spinner } from 'native-base';
import {Modal, TouchableHighlight, View} from 'react-native';

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
      <View>
        <Spinner/>
      </View>
    </Modal>

  )

}

export default LoadingModal;
