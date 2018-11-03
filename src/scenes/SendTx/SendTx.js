import React, { Component } from "react";
import { Container, Content, Card, CardItem, Button, H1, Input } from "native-base";
import { inject, observer } from 'mobx-react'
import { Text } from "react-native";
import { ZENP_MAX_DECIMALS, ZENP_MIN_DECIMALS } from '../../constants/constants';
import { isValidAddress } from '../../utils/helpers';
import SendTxStore from '../../stores/sendTxStore'
import PortfolioStore from '../../stores/portfolioStore'
import Layout from '../../components/Layout';
import styles from "./styles";

type Props = {
  sendTxStore: SendTxStore,
  portfolioStore: PortfolioStore
};

@inject('portfolioStore', 'sendTxStore')
@observer
class SendTx extends Component<Props> {

  static navigationOptions = {
    header: null
  };

  componentDidMount() {
  this.props.portfolioStore.fetch()
}

  onToChanged = (evt: SyntheticEvent<HTMLInputElement>) => {
    this.props.sendTxStore.to = evt.currentTarget.value.trim()
  }

  onPasteClicked = (clipboardContents: string) => {
    this.props.sendTxStore.to = clipboardContents
    // $FlowFixMe
    this.elTo.focus()
  }

get isToInvalid() {
  const { to } = this.props.sendTxStore
  return to.length && !isValidAddress(to)
}

renderAddressErrorMessage() {
  if (this.isToInvalid) {
    return (
      <div className="error input-message">
        <FontAwesomeIcon icon={['far', 'exclamation-circle']} />
        <span>Destination Address is invalid</span>
      </div>
    )
  }
}

updateAssetFromSuggestions = ({ asset }: { asset: string }) => {
  const { sendTxStore } = this.props
  sendTxStore.updateAssetFromSuggestions(asset)
}
updateAmountDisplay = (amountDisplay: string) => {
  const { sendTxStore } = this.props
  sendTxStore.updateAmountDisplay(amountDisplay)
}
renderSuccessResponse() {
  if (this.props.sendTxStore.status !== 'success') {
    return null
  }
  return (
    <FormResponseMessage className="success">
      <span>Transaction sent successfully.</span>
    </FormResponseMessage>
  )
}

renderErrorResponse() {
  const { status, errorMessage } = this.props.sendTxStore
  if (status !== 'error') {
    return null
  }
  return (
    <FormResponseMessage className="error">
      <span>There was a problem with sending the transaction.</span>
      <span className="devider" />
      <p>Error message: {errorMessage}</p>
    </FormResponseMessage>
  )
}

onSubmitButtonClicked = async () => {
  this.props.sendTxStore.createTransaction()
  // $FlowFixMe
  this.AutoSuggestAssets.wrappedInstance.reset()
}

get isAmountValid() {
  const { amount, asset } = this.props.sendTxStore
  return amount && (amount <= this.props.portfolioStore.getBalanceFor(asset))
}

get isToValid() {
  const { to } = this.props.sendTxStore
  return (to.length > 0) && isValidAddress(to)
}

get areAllFieldsValid() {
  const { asset, to } = this.props.sendTxStore
  return !!(asset && to && this.isAmountValid && this.isToValid)
}

get isSubmitButtonDisabled() {
  const { inProgress } = this.props.sendTxStore
  return inProgress || !this.areAllFieldsValid
}

  render() {
    return (
      <Layout>
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
      </Layout>
    );
  }
}


export default SendTx;
