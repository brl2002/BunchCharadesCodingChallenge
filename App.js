/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, TouchableOpacity, Dimensions} from 'react-native';

import CrappyLayout from './src/layouts/CrappyLayout'

// Task 1: Complete Houseparty Layout

// import HousepartyLayout from './src/layouts/HousepartyLayout'

export default class App extends Component {
  render() {
    console.disableYellowBox = true
    StatusBar.setHidden(true)
    return (
      <View style={styles.container}>
        <CrappyLayout />

        <TouchableOpacity style={styles.bottomWrapperStyle} activeOpacity={0.7}>
          <Text style={styles.textStyle}>Start Game</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomWrapperStyle: {
    width: 150,
    justifyContent: 'center',
    textAlign: 'center',
    height: 40,
    position: 'absolute',
    bottom: 5,
    backgroundColor: 'black',
    borderRadius: 30,
    opacity: 0.8
  },
  textStyle: {
    fontSize: 15,
    color: 'white',
    fontFamily: 'AvenirNext-Regular',
    fontWeight: '700',
    textAlign: 'center',
  }
});
