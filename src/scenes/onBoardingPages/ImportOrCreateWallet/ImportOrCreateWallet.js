import React, { Component } from "react";
import {
  Container,
  Body,
  Content,
  Card,
  CardItem,
  Button,
  H1
} from "native-base";

import { Text, Image } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import Images from "../../../assets/images";
import OnBoardingLayout from "../Layout/Layout";
import StepIndicator from '../../../components/StepIndicator';
export default class ImportOrCreateWallet extends Component {
  static navigationOptions = {
    header: null
  };

  static defaultProps = {
    topSpacer: undefined,
    bottomSpacer: undefined,
    width: undefined,
    height: undefined
  };

  render() {
    const { navigation } = this.props;

    return (
      <OnBoardingLayout
        className="import-create-wallet-container"
        progressStep={1}
        showNetBottomBar
      >
        <Container style={styles.mainContent}>
          <Content>
            <StepIndicator currentPosition={0} />
            <H1 style={styles.header}>Setting Up Your Wallet</H1>
            <Text style={styles.detailText}>
              Create or Import your seed (24 word mnemonic passphrase)
            </Text>
            <Card transparent style={styles.card}>
              <CardItem>
                <Image
                  source={Images.createWalletSrc}
                  style={styles.image}
                  resizeMode="contain"
                />
              </CardItem>
              <CardItem>
                <Text style={styles.cardText}>Create New Wallet</Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Text note style={styles.detailText}>
                    Creating a new wallet will generate a 24 word mnemonic
                    passphrase (seed) which you will need to store in a secure
                    place. We recommend 2 pieces of paper.
                  </Text>
                </Body>
              </CardItem>
              <Button block onPress={() => navigation.navigate("SecretPhrase")}>
                <Text style={styles.buttonText}>Create Wallet</Text>
              </Button>
            </Card>

          <Card transparent style={styles.card}>
              <CardItem>
                <Image
                  source={Images.importWalletSrc}
                  style={styles.image}
                  resizeMode="contain"
                />
              </CardItem>
              <CardItem>
                <Text style={styles.cardText}>Import Existing Wallet</Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Text note style={styles.detailText}>
                    If you already have a secret phrase (seed) you can simply
                    import it and get access to all of your assets.
                  </Text>
                </Body>
              </CardItem>
              <Button block secondary onPress={() => navigation.navigate("ImportWallet", { isImport: true})}>
                <Text style={styles.buttonText}>Import Wallet</Text>
              </Button>
            </Card>
            <Card transparent style={styles.card} />
          </Content>
        </Container>
      </OnBoardingLayout>
    );
  }
}

ImportOrCreateWallet.propTypes = {
  topSpacer: PropTypes.number,
  bottomSpacer: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number
};
