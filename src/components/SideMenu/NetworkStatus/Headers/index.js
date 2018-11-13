import React from 'react'
import { inject, observer } from 'mobx-react'
import { Text } from 'react-native';

const Headers = ({ networkStore }) => {
  const {headers} = networkStore;
  return (
    <Text style={{color: "#949494"}}>Headers: { headers !== null ? headers.toLocaleString() : 0 }</Text>
  )
}

export default inject('networkStore')(observer(Headers))
