import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { isValidBip39Word, isBip39Word, setWordFromFirstBox } from '../../../utils/seedUtils'
import SecretPhraseStore from '../../../stores/secretPhraseStore'
import OnBoardingLayout from '../Layout/Layout'
import { Content, Item, H1, H3, Input, Button, Text } from 'native-base';
import { range } from 'lodash'

const getInitialInputsState = () => range(24).map(() => '')

type Props = {
  secretPhraseStore: SecretPhraseStore
};

type State = {
  userInputWords: Array<string>
};

@inject('secretPhraseStore')
@observer
class ImportWallet extends Component<Props, State> {
  static navigationOptions = {
    header: null,
  }

  state = {
    userInputWords: getInitialInputsState(),
  }
  registerOnChangeFor = (idx: number) => (evt) => {
    const { value } = evt.currentTarget // persist evt, don't delete! see https://reactjs.org/docs/events.html#event-pooling
    this.setState(({ userInputWords }) => {
      const words = setWordFromFirstBox(value, idx)
      if(words){
        userInputWords = words
      }
      else {
          userInputWords[idx] = value
      }
      return { userInputWords }
    })
  }
  isInputPerfect = (idx: number) => {
    const word = this.state.userInputWords[idx]
    return isBip39Word(word)
  }
  isInputInvalid = (idx: number) => {
    const word = this.state.userInputWords[idx]
    return !!(word && !isValidBip39Word(word))
  }
  isInputValid = (idx: number) => {
    const word = this.state.userInputWords[idx]
    return !!(word && isValidBip39Word(word))
  }
  isInputIncomplete(idx: number) {
    const word = this.state.userInputWords[idx]
    return !!(word.length && !this.isInputPerfect(idx))
  }

  get areAllInputsPerfect() {
    return this.state.userInputWords.every(isBip39Word)
  }
  get isValidBip39Mnemonic() {
    const mnemonicPhraseString = this.state.userInputWords.join(' ')
    return bip39.validateMnemonic(mnemonicPhraseString)
  }
  get notValidBip39PhraseMessage() {
    if (!this.areAllInputsPerfect || this.isValidBip39Mnemonic) {
      return
    }
    return 'Each word is a valid bip39 word, but this is not a valid bip39 Mnemonic Passphrase';
    // return <p className="is-error" style={{ marginTop: 10 }}>Each word is a valid bip39 word, but this is not a valid bip39 Mnemonic Passphrase</p>
  }
  reset = () => {
    this.setState({ userInputWords: getInitialInputsState() })
  }
  paste = (clipboardContents: string) => {
    const arraySeed = getSeedFromClipboard(clipboardContents)
    if (!arraySeed) {
      swal({
        icon: 'warning',
        title: 'bad format',
        text: 'your clipboard content is not formatted as a valid seed',
      })
      return
    }
    this.setState({ userInputWords: arraySeed })
  }
  onSubmitClicked = () => {
    const { secretPhraseStore } = this.props
    secretPhraseStore.setMnemonicToImport(this.state.userInputWords)
  }

  renderInputs() {
    return this.state.userInputWords.map((word, idx) => (
      <Content>
          <Item regular>
            <Input placeholder='Rounded Textbox'/>
          </Item>
        </Content>
    ))
  }

  render() {
    const {
      navigation,
    } = this.props;

    return (
      <OnBoardingLayout className="import-wallet-container" progressStep={3}>
        <H1>Import Your Mnemonic Passphrase</H1>
        <H3>Please enter your 24 word secret phrase (seed). A blue check will appear if the text you entered is a valid&nbsp;</H3>
        {this.renderInputs()}
        <Button block onPress={() => navigation.navigate('SetPassword')}>
          <Text>Continue</Text>
        </Button>
      </OnBoardingLayout>
    )
  }

}

export default ImportWallet;
