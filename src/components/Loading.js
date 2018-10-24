import React, { Component } from 'react';
import { Container, Header, Content, Spinner } from 'native-base';

const Loading = props => {

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
    </Model>
  )

}

export default Loading;
