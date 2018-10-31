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

export default class SendTx extends Component {
  static navigationOptions = {
    header: null
  };

  onSendPress = () => {};

  render() {
    return (
      <Container style={styles.mainContent}>
        <Content>
          <H1 style={styles.header}>Send</H1>
          <Card transparent style={styles.card}>
            <CardItem>
              <Text style={styles.cardText}>Destination Address</Text>
            </CardItem>
            <CardItem>
              <Input
                placeholder="Destination Address"
                style={styles.inputText}
              />
            </CardItem>
            <CardItem>
              <Text style={styles.cardText}>Asset</Text>
            </CardItem>
            <CardItem>
              <Input placeholder="Asset" style={styles.inputText} />
            </CardItem>
            <CardItem>
              <Text style={styles.cardText}>Amount</Text>
            </CardItem>
            <CardItem>
              <Input placeholder="Amount" style={styles.inputText} />
            </CardItem>
            <Button  style={{margin: 10}} block onPress={() => onSendPress}>
              <Text style={styles.buttonText}>Send</Text>
            </Button>
          </Card>
        </Content>
      </Container>
    );
  }
}
