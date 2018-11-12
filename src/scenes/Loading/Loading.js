import React, { Component } from 'react';
import { View } from "react-native";
import { Container, Content, Spinner } from 'native-base';
import load from "./loadUtil";
import styles from "./styles";


const TIME_TO_DISPLAY_LOADING = 3650

class Loading extends Component {
  static navigationOptions = {
    header: null,
  }

  state = {
    shouldDisplayLoading: false,
  }

  componentDidMount() {
    load();
    this.timeout = setTimeout(() => {
      this.setState({ shouldDisplayLoading: true })
    }, TIME_TO_DISPLAY_LOADING)
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  render() {
    return (
      <Container style={styles.container}>
        <Spinner/>
      </Container>
    )
  }
}

export default Loading;
