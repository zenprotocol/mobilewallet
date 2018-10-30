import React, { Component } from 'react';
import { View } from "react-native";
import { Container, Header, Content, Spinner } from 'native-base';
import LoadingModal from "../../components/LoadingModal";
import load from "./loadUtil";


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
      <View>
        <Spinner/>
      </View>
    )
  }
}

export default Loading;
