import React from 'react'
import { inject, observer } from 'mobx-react'
import { Text } from 'react-native';

const Blocks = ({ networkStore }) => {
  const {blocks} = networkStore;
  return (
    <Text style={{color: "#949494"}}>Blocks: { blocks !== null ? blocks.toLocaleString() : 0 }</Text>
  )
}

export default inject('networkStore')(observer(Blocks))
