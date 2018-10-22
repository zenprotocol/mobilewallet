import { inject, observer } from 'mobx-react';
import _ from 'lodash';
import { isValidBip39Word, isBip39Word, setWordFromFirstBox } from '../../utils/seedUtils'
import SecretPhraseStore from '../../../stores/secretPhraseStore'
import OnBoardingLayout from '../Layout/Layout'
import { Container, Content, H1, H3 } from 'native-base';

type Props = {
  secretPhraseStore: SecretPhraseStore
};

type State = {
  userInputWords: Array<string>
};

@inject('secretPhraseStore')
@observer
class ImportWallet extends Component<Props, State> {

  render() {
    return (
      <OnBoardingLayout className="import-wallet-container" progressStep={3}>
        <H1>Import Your Mnemonic Passphrase</H1>
        <H3>Please enter your 24 word secret phrase (seed).<br/>A blue check will appear if the text you entered is a valid&nbsp;</H3>
      </OnBoardingLayout>
    )
  }

}

export default ImportWallet;
