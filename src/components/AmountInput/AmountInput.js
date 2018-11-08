// @flow

import React from 'react';
import { observer } from 'mobx-react';
import { View } from 'react-native';
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

  onChange = (evt: SyntheticEvent<HTMLInputElement>) => {
    const { maxDecimal, onAmountDisplayChanged } = this.props
    const newAmountDisplay = formatNextAmountDisplay(evt.currentTarget.value, maxDecimal)
    if (newAmountDisplay === false) {
      return
    }
    onAmountDisplayChanged(newAmountDisplay)
  }

  onKeyDown = (evt: SyntheticKeyboardEvent<HTMLInputElement>) => {
    if (evt.keyCode === 38) { this.increaseAmount() } // UP
    if (evt.keyCode === 40) { this.decreaseAmount() } // DOWN
  }

  increaseAmount = () => {
    const { amount, onAmountDisplayChanged } = this.props
    let newAmount
    if (amount === undefined || amount === '') {
      newAmount = 1
    } else {
      newAmount = amount + 1
    }
    onAmountDisplayChanged(String(newAmount))
  }

  decreaseAmount = () => {
    const { amount, onAmountDisplayChanged } = this.props
    if (amount !== undefined && amount >= 1) {
      onAmountDisplayChanged(String(amount - 1))
    }
  }

  renderMaxAmountDiv() {
    const { maxAmount, shouldShowMaxAmount } = this.props
    if (!shouldShowMaxAmount || maxAmount === null) {
      return null
    }
    return <div className="maxAmount"> / { this.maxAmountDisplay }</div>
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
        <div className="input-message error">
          <FontAwesomeIcon icon={['far', 'exclamation']} />
          <span>{this.props.exceedingErrorMessage}</span>
        </div>
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
            id="amount"
            placeholder="Enter amount"
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            value={numberWithCommas(amountDisplay)}
            ref={ref('el').bind(this)}
            onKeyDown={this.onKeyDown}
            onChange={this.onChange}
          />
          { this.renderMaxAmountDiv() }
        </Item>
        {this.renderExceedingMaxAmountError()}
      </View>

    )
  }
}

export default AmountInput
