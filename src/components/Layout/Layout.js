// @flow
import * as React from 'react';
import { View, NetInfo } from 'react-native';
import { Button, H1, H3, Form, Item, Input, Text, Container, Left, Content } from 'native-base';
import { withNavigation } from 'react-navigation';
import FooterTabs from '../FooterTabs';
import Header from '../CustomHeader';
import styles from './styles';

type Props = {
  children: React.Node,
  className?: string
};

class Layout extends React.Component<Props> {
  static navigationOptions = {
    headerMode: 'none'
  }

  state = {
    isConnected: true
  }

  componentWillMount(){
    NetInfo.isConnected.fetch().then(isConnected => {
      this.setState({
        isConnected: isConnected
      })
    });
  }

  render() {
    const { isConnected } = this.state;
    return (
        <Container>
          <Header {...this.props}/>
           <Content style={styles.main}>
            { isConnected ?
                this.props.children
              :
              <View>
                 <H1 style={ styles.title }>You are not connected to the internet, please connect</H1>
              </View>
            }
          </Content>
          <FooterTabs {...this.props}/>
        </Container>
    )
  }
}

export default withNavigation(Layout);
