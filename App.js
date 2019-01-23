/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';

import CrappyLayout from './src/layouts/CrappyLayout'

export default class App extends Component {
  render() {
    console.disableYellowBox = true
    StatusBar.setHidden(true)
    return (
      <View style={styles.container}>
        <CrappyLayout />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
