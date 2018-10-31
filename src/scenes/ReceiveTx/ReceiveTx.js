import React, { Component } from "react";
import {
  Container,
  Content,
  Card,
  CardItem,
  Button,
  H1,
  Input
} from "native-base";

import { Text } from "react-native";
import styles from "./styles";
import { inject, observer } from 'mobx-react';
import PublicAddressStore from '../../stores/publicAddressStore';

type Props = {
  publicAddressStore: PublicAddressStore
};

@inject('PublicAddressStore')
@observer
export default class ReceiveTx extends Component {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
   // this.props.publicAddressStore.fetch();
  }

  onSendPress = () => {};

  render() {
    const { publicAddressStore } = this.props
    console.log(publicAddressStore)
    return (
      <Container style={styles.mainContent}>
        <Content>
          <H1 style={styles.header}>Receive</H1>
          <Card transparent style={styles.card}>
            <CardItem>
              <Text style={styles.cardText}>Your Address</Text>
            </CardItem>
            <CardItem>
              <Input placeholder="Your Address" style={styles.inputText} />
            </CardItem>
            <Button style={{margin: 10}} block onPress={() => onSendPress}>
              <Text style={styles.buttonText}>Copy</Text>
            </Button>
            <CardItem>
              <Text style={styles.cardText}>PKHash</Text>
            </CardItem>
            <CardItem>
              <Input placeholder="PKHash" style={styles.inputText} />
            </CardItem>
            <Button style={{margin: 10}} block onPress={() => onSendPress}>
              <Text style={styles.buttonText}>Copy</Text>
            </Button>
          </Card>
        </Content>
      </Container>
    );
  }
}
