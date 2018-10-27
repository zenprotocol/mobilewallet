// @flow
import React from "react";
import { View, StyleSheet } from "react-native";
import cx from 'classnames';
import NetBottomBar from "../../../components/NetBottomBar";

type Props = {
  hideSteps?: boolean,
  className?: string,
  progressStep?: number | null,
  children: React.Node
};

class OnBoardingLayout extends React.Component<Props> {
  static navigationOptions = {
    header: null
  };

  static defaultProps = {
    className: "",
    hideSteps: false,
    progressStep: null
  };

  render() {
    const { className, children } = this.props;
    return (
      <View style={{ flex: 1 }} className={cx(styles.container, className)}>
        {children}
        <NetBottomBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      marginTop: 10
    }
})

export default OnBoardingLayout;
