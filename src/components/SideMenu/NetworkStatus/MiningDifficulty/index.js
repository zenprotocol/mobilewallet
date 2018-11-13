import React from 'react'
import { inject, observer } from 'mobx-react'
import { Text } from 'react-native';

const MiningDifficulty = ({ networkStore }) => {
  const {difficulty} = networkStore;
  return (
    <Text style={{color: "#949494"}}>Mining Difficulty: { difficulty !== null ? difficulty.toLocaleString() : 0 }</Text>
  )
}

export default inject('networkStore')(observer(MiningDifficulty))
