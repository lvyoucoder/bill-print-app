/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {StyleSheet} from 'react-native';

import {TabNavigator} from 'react-navigation';

import TakeInScreen from './app/pages/TakeInScreen';
import SearchScreen from './app/pages/SearchScreen';

const MainScreenNavigator = TabNavigator({
    TakeIn: {screen: TakeInScreen},
    Search: {screen:SearchScreen},
});

export default class App extends React.Component {
    render() {
        return <MainScreenNavigator/>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});
