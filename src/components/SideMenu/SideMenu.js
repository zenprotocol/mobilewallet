import React from 'react';
import { View, Image, StatusBar } from 'react-native';
import { Button, Text, Container, List, ListItem, Item, Content, Icon, Separator } from 'native-base';
import Images from "../../assets/images";
import NetBottomBar from "../NetBottomBar";
import styles from './styles';

// Network Status
import NetworkStatus from './NetworkStatus';
import ZenJsVersion from './ZenJsVersion';
import WalletVersion from './WalletVersion';

const routes = ["Protfilo", "ReceiveTx", "SendTx"];

export default class SideMenu extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <View style={styles.banner}>
            <Image source={Images.logoSrc} resizeMode = 'contain'/>
          </View>

          <List
            dataArray={routes}
            contentContainerStyle={{ marginTop: 10 }}
            renderRow={data => {
              return (
                <ListItem
                  button
                  style={styles.listItem}
                  onPress={() => this.props.navigation.navigate(data)}
                >
                  <Text style={styles.listItemText}>{data}</Text>
                </ListItem>
              );
            }}
          />

         <View style={styles.info}>
            <NetworkStatus/>
            <WalletVersion/>
            <ZenJsVersion/>
          </View>


        </Content>
        <NetBottomBar/>
      </Container>
    );
  }
}
