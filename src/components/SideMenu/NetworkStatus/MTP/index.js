import React from 'react'
import { inject, observer } from 'mobx-react'
import { Text } from 'react-native';
import moment from 'moment';

function formattedBlockchainTime(medianTime) {
  return medianTime
    ? moment(new Date(medianTime)).format('DD/MM/YYYY, HH:mm:ss')
    : medianTime
}

const MTP = ({ networkStore }) => {
  const { medianTime } = networkStore;
  return (
    <Text style={{color: "#949494"}}>MTP: { formattedBlockchainTime(medianTime) }</Text>
  )
}

export default inject('networkStore')(observer(MTP))
