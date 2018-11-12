// @flow

import React from 'react';
import { observer } from 'mobx-react';
import { View, Text } from 'react-native';
import { Input, Label, Item, Icon } from 'native-base';

import { minimumDecimalPoints, numberWithCommas } from '../../utils/helpers'
import { ref } from '../../utils/domUtils'

import { formatNextAmountDisplay } from './AmountInputUtils'
import styles from './styles';

type Props = {
  maxDecimal?: number,
  minDecimal?: number,
  amount?: number,
  amountDisplay: string,
  maxAmount?: number | null,
  shouldShowMaxAmount?: boolean,
  exceedingErrorMessage: string,
  onAmountDisplayChanged: (string) => void,
  label: string
};

type State = {
  isFocused: boolean
};


@observer
class AmountInput extends React.Component<Props, State> {
  el: HTMLInputElement
  static defaultProps = {
    maxDecimal: 0,
    minDecimal: 0,
    amount: null,
    maxAmount: null,
    shouldShowMaxAmount: false,
  }
  state = {
    isFocused: false,
  }

  onChange = (value) => {
    console.log(value);
    const { maxDecimal, onAmountDisplayChanged } = this.props
    const newAmountDisplay = formatNextAmountDisplay(value, maxDecimal)
    if (newAmountDisplay === false) {
      return
    }
    onAmountDisplayChanged(newAmountDisplay)
  }

  renderMaxAmountDiv() {
    const { maxAmount, shouldShowMaxAmount } = this.props
    if (!shouldShowMaxAmount || maxAmount === null) {
      return null
    }
    return <Text style={styles.maxAmount}> / { this.maxAmountDisplay }</Text>
  }

  get maxAmountDisplay() {
    const { maxAmount, minDecimal } = this.props
    // $FlowFixMe
    const n = minDecimal ? minimumDecimalPoints(maxAmount, minDecimal) : maxAmount
    // $FlowFixMe
    return numberWithCommas(n)
  }

  isExceedingMaxAmount() {
    const { amount, maxAmount } = this.props
    // $FlowFixMe
    return amount > maxAmount
  }

  renderExceedingMaxAmountError() {
    if (this.isExceedingMaxAmount()) {
      return (
        <Text style= {{color: "#fd3a3a", fontSize: 16, marginTop: 4 }}>{this.props.exceedingErrorMessage}</Text>
      )
    }
  }

  onFocus = () => this.setState({ isFocused: true })
  onBlur = () => this.setState({ isFocused: false })

  render() {
    const { label, amountDisplay } = this.props
    return (
      <View style={styles.container}>
        <Label style={{ color: '#fff' }}>{label}</Label>
        <Item>
          <Input
            placeholder="Enter amount"
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            value={numberWithCommas(amountDisplay)}
            ref={ref('el').bind(this)}
            onChangeText={(value) => this.onChange(value)}
            keyboardType="number-pad"
            style={styles.input}
          />
          { this.renderMaxAmountDiv() }
        </Item>
        {this.renderExceedingMaxAmountError()}
      </View>

    )
  }
}

export default AmountInput
