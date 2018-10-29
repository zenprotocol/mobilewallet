// @flow
import React from "react";
import { View, StyleSheet } from "react-native";
import cx from 'classnames';
import NetBottomBar from "../../../components/NetBottomBar";

type Props = {
  hideSteps?: boolean,
  className?: string,
  progressStep?: number | null,
  children: React.Node,
  showNetBottomBar: boolean,
};

class OnBoardingLayout extends React.Component<Props> {
  static navigationOptions = {
    header: null
  };

  static defaultProps = {
    className: "",
    hideSteps: false,
    progressStep: null,
    showNetBottomBar: false
  };

  render() {
    const { className, children, showNetBottomBar } = this.props;
    return (

      <View style={{ flex: 1, backgroundColor: '#121212', paddingTop: 20 }} className={className}>
        {children}
        {showNetBottomBar ?
          <NetBottomBar />
          : null
        }
      </View>
    );
  }
}


export default OnBoardingLayout;
