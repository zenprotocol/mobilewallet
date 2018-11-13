import React from 'react';
import { WALLET_VERSION } from '../../../constants/versions';
import { Text, View } from 'native-base';

const WalletVersion = () => {
  return (
    <View style={{flexDirection:'row', flexWrap:'wrap'}}>
      <Text style={{color: "#949494", fontSize: 14}}>Wallet Version: {WALLET_VERSION}</Text>
    </View>
  )
}

export default WalletVersion;
