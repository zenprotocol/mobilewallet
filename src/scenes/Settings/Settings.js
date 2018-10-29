// @flow

import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Button, H1, Text, Container } from "native-base";

type Props = {
  secretPhraseStore: SecretPhraseStore,
  networkStore: NetworkStore
};

@inject('secretPhraseStore', 'networkStore')
@observer
class Settings extends Component<Props> {
  render(){
    return (
      <Container>
        <H1>General settings</H1>
      </Container>
    )
  }
}

export default Settings
