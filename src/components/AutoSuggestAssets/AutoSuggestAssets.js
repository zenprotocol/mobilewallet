// @flow

import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import Autocomplete from 'react-native-autocomplete-input';
import { truncateString } from '../../utils/helpers'
import PortfolioStore from '../../stores/portfolioStore'
import { View } from 'react-native';
import { Input, Text, Item, Label } from 'native-base';
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
class AutoSuggestAssets extends Component<Props, State> {

  state = {
    suggestionInputValue: this.props.asset,
    suggestions: [],
  }

  // used by parent
  reset() {
    this.setState({ suggestionInputValue: '' })
  }

  renderSuggestion = (suggestion: Asset) => (
    <Item>
      {suggestion.name} ({truncateString(suggestion.asset)})
    </Item>
  )

  onSuggestionSelected = (
    evt: SyntheticMouseEvent<HTMLInputElement>,
    { suggestion }: { suggestion: Asset },
  ) => {
    this.setState({
      suggestionInputValue: suggestion.asset,
    }, this.updateParent)
  }

  onChange = (
    evt: SyntheticEvent<HTMLInputElement>,
    { newValue, method }: { newValue: string, method: string },
  ) => {
    const userPressedUpOrDown = (method === 'down' || method === 'up')
    if (userPressedUpOrDown) {
      return
    }
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

  getSuggestions = (value: string) => {
    const filtered = this.props.portfolioStore.filteredBalances(value)
    return this.valueIsExactMatch(value) ? [] : filtered
  }

  valueIsExactMatch(value: string) {
    const filtered = this.props.portfolioStore.filteredBalances(value)
    return filtered.length === 1 && filtered[0].asset === value
  }

  // eslint-disable-next-line react/no-unused-prop-types
  onSuggestionsFetchRequested = ({ value }: { value: string }) => {
    this.setState({ suggestions: this.getSuggestions(value) })
  }

  onSuggestionsClearRequested = () => {
    this.setState({ suggestions: [] })
  }

  shouldRenderSuggestions = () => true

  get hasError() {
    const { suggestions, suggestionInputValue } = this.state
    return !this.isValid && (suggestions.length === 0) && (suggestionInputValue.length > 0)
  }

  get isValid() {
    return !!this.getChosenAsset
  }

  renderErrorMessage() {
    if (!this.hasError) {
      return null
    }
    return (
      <div className="input-message error">
        <FontAwesomeIcon icon={['far', 'exclamation']} />
        <span>You don&apos;t have such an asset</span>
      </div>
    )
  }

  renderChosenAssetName() {
    const chosenAssetName = this.props.portfolioStore.getAssetName(this.state.suggestionInputValue)
    if (chosenAssetName) {
      return (
        <div className="chosenAssetName">{chosenAssetName}</div>
      )
    }
  }

  render() {
    const { suggestionInputValue, suggestions } = this.state
    const inputProps = {
      type: 'search',
      placeholder: 'Start typing the asset name',
      value: suggestionInputValue,
      onChange: this.onChange,
    }

    return (
      <View style={styles.container}>
        <Text style={{paddingBottom: 10, fontSize: 16, color: "#e6e6e6", fontWeight: "400"}}>Asset</Text>
        <Autocomplete
          data={suggestions}
          style={{ backgroundColor: 'transparent', color: '#fff', fontSize: 16}}
          placeholder="Start typing the asset name"
          containerStyle={styles.autocompleteContainer}
          inputContainerStyle={styles.inputContainerStyle}
        />
        {this.renderChosenAssetName()}
        {this.renderErrorMessage()}
      </View>

    )
  }
}

// onSuggestionSelected={this.onSuggestionSelected}
// onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
// onSuggestionsClearRequested={this.onSuggestionsClearRequested}
// getSuggestionValue={getSuggestionValue}
// renderSuggestion={this.renderSuggestion}
// shouldRenderSuggestions={this.shouldRenderSuggestions}
// inputProps={inputProps}

export default AutoSuggestAssets
