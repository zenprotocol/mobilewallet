// @flow

import React from 'react';
import {
  View,
} from 'react-native';

import NetBottomBar from '../../../components/NetBottomBar';

type Props = {
  hideSteps?: boolean,
  className?: string,
  progressStep?: number | null,
  children: React.Node
};

class OnBoardingLayout extends React.Component<Props> {
  static navigationOptions = {
    header: null,
  }

  static defaultProps = {
    className: '',
    hideSteps: false,
    progressStep: null,
  }

  render() {
    const { className, children } = this.props;
    return (
      <View style={{ flex: 1 }} className={className}>
        {children}
        <NetBottomBar />
      </View>
    );
  }
}

export default OnBoardingLayout;
