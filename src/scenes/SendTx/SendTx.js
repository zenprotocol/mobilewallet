// @flow

import React, { Component } from "react";
import { Container, Content, Card, CardItem, Button, H1, Input, Item, Icon, Label } from "native-base";
import QRScan from '../../components/QRCode';
import { inject, observer } from 'mobx-react'
import { Text, TextInput, Modal, View, TouchableOpacity } from "react-native";
import { ZENP_MAX_DECIMALS, ZENP_MIN_DECIMALS } from '../../constants/constants';
import { isValidAddress } from '../../utils/helpers';
import { isZenAsset } from '../../utils/zenUtils'
import { ref } from '../../utils/domUtils'
import SendTxStore from '../../stores/sendTxStore'
import PortfolioStore from '../../stores/portfolioStore'
import Layout from '../../components/Layout';
import PickerAssets from '../../components/PickerAssets';
import AmountInput from '../../components/AmountInput';
import ConfirmPasswordModal from "../../components/ConfirmPasswordModal"
import styles from "./styles";

type Props = {
  sendTxStore: SendTxStore,
  portfolioStore: PortfolioStore
};

@inject('portfolioStore', 'sendTxStore')
@observer
class SendTx extends Component<Props> {

  state = {
    modalVisible: false,
    showConfirmPasswordModal: false
  }

  componentDidMount() {
    this.props.portfolioStore.fetch()
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
      <Label>
        <Text style={{color: '#fd3a3a'}}>Destination Address is invalid</Text>
      </Label>
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
    <Text style={styles.cardText}>Transaction sent successfully.</Text>
  )
}

renderErrorResponse() {
  const { status, errorMessage } = this.props.sendTxStore
  if (status !== 'error') {
    return null
  }
  return (
    <View>
      <Text>There was a problem with sending the transaction.</Text>
      <Text>Error message: {errorMessage}</Text>
    </View>
  )
}

onSubmitButtonClicked = () => {
  this.setState({
    showConfirmPasswordModal: true
  })
}

transactionApproved = () => {
  this.setState({
    showConfirmPasswordModal: false
  });
  this.props.sendTxStore.createTransaction()
  this.PickerAssets.wrappedInstance.reset()
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

closeModal = () => {
  this.setState({
    modalVisible: false
  })
}

closeConfirmPasswordModal = () => {
  this.setState({
    showConfirmPasswordModal: false
  });
}

render() {
  const { portfolioStore } = this.props;
  const { to, asset, amount, amountDisplay, inProgress } = this.props.sendTxStore;
  const { showConfirmPasswordModal } = this.state;

  return (
    <Layout>

      <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={() => {this.closeModal}}>
        <View style={{marginTop: 22}}>
          <QRScan onUpdateParent={this.closeModal}/>
        </View>
      </Modal>

      <Content>
        <H1 style={styles.header}>Send</H1>
        { this.renderSuccessResponse() }
        { this.renderErrorResponse() }
        <Card transparent style={styles.card}>
          <CardItem>
            <Text style={styles.cardText}>Destination Address</Text>
          </CardItem>
          <CardItem>
            <Item error={this.isToInvalid ? true : false } >
              <Input
                placeholder="Destination Address"
                name="to"
                type="text"
                ref={ref('elTo').bind(this)}
                value={to}
                style={styles.inputText}
                onChangeText={(text) =>
                  this.props.sendTxStore.to = text.trim()
                }
              />
              {!this.isToInvalid && <Icon name="close"/>}
              <TouchableOpacity onPress={() => this.setState({modalVisible: true})}>
                <Icon style={{color: "#fff", fontSize: 18}} ios="ios-qr-scanner" android="md-qr-scanner"/>
              </TouchableOpacity>
            </Item>
          </CardItem>
          <CardItem>
            {this.renderAddressErrorMessage()}
          </CardItem>
          <CardItem>
            <PickerAssets
              asset={asset}
              onUpdateParent={this.updateAssetFromSuggestions}
              ref={ref('PickerAssets').bind(this)}
            />
          </CardItem>
          <CardItem>
            <AmountInput
              amount={amount}
              amountDisplay={amountDisplay}
              maxDecimal={isZenAsset(asset) ? ZENP_MAX_DECIMALS : 0}
              minDecimal={isZenAsset(asset) ? ZENP_MIN_DECIMALS : 0}
              maxAmount={asset ? portfolioStore.getBalanceFor(asset) : null}
              shouldShowMaxAmount
              exceedingErrorMessage="Insufficient Funds"
              onAmountDisplayChanged={this.updateAmountDisplay}
              label="Amount"
              />
          </CardItem>
          <Button style={{margin: 10}} block disabled={this.isSubmitButtonDisabled} onPress={this.onSubmitButtonClicked}>
            <Text style={styles.buttonText}>{inProgress ? 'Sending' : 'Send'}</Text>
          </Button>
        </Card>
      </Content>
      {showConfirmPasswordModal && <ConfirmPasswordModal close={this.closeConfirmPasswordModal} show={showConfirmPasswordModal} transactionApproved={this.transactionApproved} />}
    </Layout>
  );
  }
}


export default SendTx;
