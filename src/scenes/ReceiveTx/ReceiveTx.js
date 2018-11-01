import React, { Component } from "react";
import { Container, Content, Card, CardItem, Button, H1, Input } from "native-base";
import { Text, Clipboard } from "react-native";
import styles from "./styles";
import { inject, observer } from 'mobx-react';
import PublicAddressStore from '../../stores/publicAddressStore';

type Props = {
  publicAddressStore: PublicAddressStore
};

type State = {
  isCopyAddr: boolean,
  isCopyPKHash: boolean,
};

@inject('publicAddressStore')
@observer
export default class ReceiveTx extends Component {

  static navigationOptions = {
    header: null
  };

  state = {
    isCopyAddr: false,
    isCopyPKHash: false
  }

  componentDidMount() {
   this.props.publicAddressStore.fetch();
  }

  onCopyAddress = () => {
    Clipboard.setString(this.props.publicAddressStore.address);
    this.setState({ isCopyAddr: true });
  };
  onCopyPKHash = () => {
    Clipboard.setString(this.props.publicAddressStore.pkHash);
    this.setState({ isCopyPKHash: true });
  };
  render() {
    const { publicAddressStore } = this.props;
    const { isCopyAddr, isCopyPKHash} = this.state;
    return (
      <Container style={styles.mainContent}>
        <Content>
          <H1 style={styles.header}>Receive</H1>
          <Card transparent style={styles.card}>
            <CardItem>
              <Text style={styles.cardText}>Your Address</Text>
            </CardItem>
            <CardItem>
              <Input placeholder="Your Address" value={publicAddressStore.address} style={styles.inputText} />
            </CardItem>
            <CardItem>
              {!!publicAddressStore.addressError && (
                <Text style={styles.addressError}>{publicAddressStore.addressError}</Text>
              )}
            </CardItem>
            <Button style={{margin: 10}} block onPress={this.onCopyAddress}>
              <Text style={styles.buttonText}>{isCopyAddr ? 'Copied' : 'Copy'}</Text>
            </Button>
            <CardItem>
              <Text style={styles.cardText}>PKHash</Text>
            </CardItem>
            <CardItem>
              <Input placeholder="PKHash" value={publicAddressStore.pkHash} style={styles.inputText} />
            </CardItem>
            <Button style={{margin: 10}} block onPress={this.onCopyPKHash}>
              <Text style={styles.buttonText}>{isCopyPKHash ? 'Copied' : 'Copy'}</Text>
            </Button>
          </Card>
        </Content>
      </Container>
    );
  }
}
