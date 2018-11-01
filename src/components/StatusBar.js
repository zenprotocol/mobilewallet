// @flow

import React from 'react';
import { View, StatusBar, Platform } from 'react-native';
import { observer, inject } from 'mobx-react';
import AppStore from "../stores/appStore";

type Props = {
  backgroundColor?: string,
  appStore: AppStore,
};
// here, we add the spacing for iOS
// and pass the rest of the props to React Native's StatusBar

function _StatusBar (props: Props) {
    const height = (props.appStore.isIOS) ? 20 : 0;
    const { backgroundColor } = props;

    return (
        <View style={{ height, backgroundColor }}>
            <StatusBar { ...props } />
        </View>
    );
}

export default inject('appStore')(observer(_StatusBar));
