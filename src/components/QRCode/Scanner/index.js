import React, { Component } from 'react';

import {
  Text,
  TouchableOpacity,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

class QrScan extends Component {

  onRead = (e) => {
    console.log(e);
    this.updateParent(e);
  }

  updateParent(e) {
    this.props.onUpdateParent(e)
  }

  render() {
    return (
      <QRCodeScanner
        onRead={(e) => this.onRead(e)}
        showMarker={true}
      />
    );
  }
}

export default QrScan;
