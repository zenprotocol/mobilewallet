import React, { Component } from "react";
import { Container, Content, Card, CardItem, Button, H1, Input } from "native-base";
import { Text, Clipboard, View } from "react-native";
import styles from "./styles";
import { inject, observer } from 'mobx-react';
import PublicAddressStore from '../../stores/publicAddressStore';
import Layout from '../../components/Layout';
import LoadingModal from '../../components/LoadingModal';

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
    const { publicAddressStore } = this.props
    publicAddressStore.fetch();
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
      <Layout style={styles.mainContent}>
        <Content>
          <H1 style={styles.header}>Receive</H1>
          { publicAddressStore.address ?
            <Card transparent style={styles.card}>
              <Text style={styles.title}>Your Address</Text>
              <Input
                placeholder="Your Address"
                value={publicAddressStore.address}
                style={styles.inputText}
              />
              {!!publicAddressStore.addressError && (
                <Text style={styles.addressError}>{publicAddressStore.addressError}</Text>
              )}
              <Button block onPress={this.onCopyAddress}>
                <Text style={styles.buttonText}>{isCopyAddr ? 'Copied' : 'Copy'}</Text>
              </Button>

              <View style={{marginTop: 20}}>
                <Text style={styles.title}>PKHash</Text>
                <Input placeholder="PKHash" value={publicAddressStore.pkHash} style={styles.inputText} />
                <Button block onPress={this.onCopyPKHash}>
                  <Text style={styles.buttonText}>{isCopyPKHash ? 'Copied' : 'Copy'}</Text>
                </Button>
              </View>

            </Card>
            :
            <LoadingModal/>
          }
        </Content>
      </Layout>
    );
  }
}
