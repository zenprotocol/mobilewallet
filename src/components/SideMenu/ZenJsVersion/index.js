import React from 'react';
import { ZEN_JS_VERSION } from '../../../constants/versions';
import { Text, View } from 'native-base';

const ZenJsVersion = () => {

  return (
    <Text style={{color: "#949494", fontSize: 14}}>Zenjs Version: {ZEN_JS_VERSION}</Text>
  )
};

export default ZenJsVersion;
