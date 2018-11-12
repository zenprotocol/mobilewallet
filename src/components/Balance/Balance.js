import React, { Component } from "react";
import { inject, observer } from 'mobx-react'
import { View } from 'react-native';
import { Text } from 'native-base';
import PortfolioStore from '../../stores/portfolioStore'

type Props = {
    portfolioStore: PortfolioStore,
    className?: string
};

@inject('portfolioStore')
@observer
class Balance extends Component<Props> {
  render() {
    const { portfolioStore } = this.props;
    return(

        <Text style={{color: 'white'}}>{portfolioStore.zenDisplay} ZP</Text>

    )
  }
}

export default Balance
