// @flow

import React, { Component } from "react";
import { Button, Card, CardItem, Text, Container, H1, H3 } from "native-base";
import Icon from "react-native-vector-icons/dist/FontAwesome";
import styles from "./styles";

const ForgotPassword = (props) => {
  return (
    <Container style={styles.container}>
      <Icon name="exclamation-circle" size={96} color="#ff9056" />
      <H1 style={styles.h1}>Wipe your seeds</H1>
      <H3 style={styles.h3}>Be sure you have your seed saved.</H3>
      <Card transparent style={styles.card}>
        <CardItem>
          <Button
            secondary
            block
            style={styles.button}
            onPress={() => props.navigation.navigate("UnLockWallet")}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </Button>
          <Button
            block
            style={styles.button}
            onPress={() => props.navigation.navigate("WelcomeMessages")}
          >
            <Text style={styles.buttonText}>OK</Text>
          </Button>
        </CardItem>
      </Card>
    </Container>
  );
};

export default ForgotPassword;
