// @flow

import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { truncateString } from '../../utils/helpers'
import PortfolioStore from '../../stores/portfolioStore';
import { View, TouchableOpacity } from 'react-native';
import { Input, Text, Item, Label, Icon, Picker, Form } from 'native-base';
import styles from "./styles";

const getSuggestionValue = suggestion => suggestion.asset

type Asset = {
  asset: string,
  name: string
};

type Props = {
  asset: string,
  portfolioStore: PortfolioStore,
  onUpdateParent: ({ asset: string }) => void
};

type State = {
  suggestionInputValue: string,
  suggestions: Array<Asset>
};

@inject('portfolioStore')
@observer
class PickerAssets extends Component<Props, State> {

  state = {
    suggestionInputValue: this.props.asset,
    suggestions: this.getSuggestions,
  }

  // used by parent
  reset() {
    this.setState({ suggestionInputValue: '' })
  }

  renderSuggestion() {
    const { suggestions } = this.state
    _suggestions = suggestions && suggestions.map(suggestion => (
      <Picker.Item label={ `${suggestion.name} (${truncateString(suggestion.asset)})`} value={suggestion.asset} key={suggestion.asset}/>
    ))
    return _suggestions;
  }

  onChange = (newValue: string) => {
    this.setState({
      suggestionInputValue: newValue.trim(),
    }, this.updateParent)
  }

  updateParent = () => {
    if (!this.isValid) {
      this.props.onUpdateParent({ asset: '' })
      return
    }
    const { asset } = this.getChosenAsset
    this.props.onUpdateParent({ asset })
  }

  get getChosenAsset() {
    return this.props.portfolioStore.assets.find(a => a.asset === this.state.suggestionInputValue)
  }

  get getSuggestions() {
    return this.props.portfolioStore.assets
  }

  onSuggestionsClearRequested = () => {
    this.setState({ suggestions: [] })
  }

  get hasError() {
    const { suggestions, suggestionInputValue } = this.state
    return !this.isValid && (suggestions && suggestions.length === 0) && (suggestionInputValue.length > 0)
  }

  get isValid() {
    return !!this.getChosenAsset
  }

  renderErrorMessage() {
    if (!this.hasError) {
      return null
    }
    return <Text style={styles.error}>You don&apos;t have such an asset</Text>
  }

  renderChosenAssetName() {
    const chosenAssetName = this.props.portfolioStore.getAssetName(this.state.suggestionInputValue)
    if (chosenAssetName) {
      return (
        <Text>{chosenAssetName}</Text>
      )
    }
  }

  render() {
    const { suggestionInputValue,  isLoading } = this.state

    return (
      <View style={styles.container}>
        <Text style={styles.label}>Asset</Text>
        <Form>
          <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              style={{ width: undefined }}
              placeholder="Select Asset"
              placeholderStyle={{ color: "#fff" }}
              placeholderIconColor="#fff"
              style={{color: "#fff"}}
              selectedValue={suggestionInputValue}
              value={suggestionInputValue}
              onValueChange={this.onChange}
              >
                <Picker.Item value='' label='Select Asset' />
                {this.renderSuggestion()}
            </Picker>
          </Item>
        </Form>
        {this.renderErrorMessage()}
      </View>

    )
  }
}

export default PickerAssets
