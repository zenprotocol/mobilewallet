import React from 'react'
import { inject, observer } from 'mobx-react'
import { Text } from 'react-native';

const ChainStatus = ({ networkStore }) => (
  <Text style={{color: "#949494"}}>Chain: { networkStore.chain }</Text>
)

export default inject('networkStore')(observer(ChainStatus))
