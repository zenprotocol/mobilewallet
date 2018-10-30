// @flow
import * as React from 'react';
import { View, NetInfo } from 'react-native';
import { Button, H1, H3, Form, Item, Input, Text, Container } from "native-base";

type Props = {
  children: React.Node,
  className?: string
};

class Layout extends React.Component<Props> {
  render() {
    return (
      <React.Fragment>
          <H1>You are not connected to the internet, please connect</H1>
      </React.Fragment>
    )
  }
}

export default Layout;
