import React from 'react';
import { Text, View } from 'native-base';

import ChainStatus from './ChainStatus';
import Blocks from './Blocks';
import Headers from './Headers';
import MiningDifficulty from './MiningDifficulty';
import MTP from './MTP';

const NetworkStatus = () => {
  return (
    <View>
      <ChainStatus/>
      <Blocks/>
      <Headers/>
      <MiningDifficulty/>
      <MTP/>
    </View>
  )
}

export default NetworkStatus;
