// @flow

import React, { Component } from "react";
import { View, Image } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import styles from './styles';
import Images from "../../assets/images";
import Balance from "../Balance";

type Props = {};

class CustomHeader extends React.Component<Props> {

  render() {
    return (

      <Header style={styles.main}>
        <Left>
          <Button transparent>
            <Icon ios="ios-menu" android="md-menu" />
          </Button>
        </Left>
        <Body>
          <Title>
            <Image
              source={Images.logoIconSrc}
              style={styles.image}
              resizeMode={'contain'}
            />
          </Title>
        </Body>
        <Right>
          <Balance/>
        </Right>
      </Header>

    )
  }
}

export default CustomHeader;
