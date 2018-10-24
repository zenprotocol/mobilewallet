import React, { Component } from 'react';
import {
  H1,
} from 'native-base';

import {
  Text,
  Image,
} from 'react-native';
import OnBoardingLayout from '../Layout/Layout';

export default class SetPassword extends Component {
  static navigationOptions = {
  }

  static defaultProps = {
  }

  render() {
    return (
      <OnBoardingLayout className="import-wallet-container" progressStep={3}>
        <H1>Set Password</H1>
      </OnBoardingLayout>
    );
  }
}

SetPassword.propTypes = {
};
