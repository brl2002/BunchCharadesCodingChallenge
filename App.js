/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, TouchableOpacity, Dimensions, LogBox} from 'react-native';

import CrappyLayout from './src/layouts/CrappyLayout'

// Task 1: Complete Houseparty Layout

import HousepartyLayout from './src/layouts/HousepartyLayout'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      numMembers: 2
    }
  }


  onAddMember = () => {
    this.setState(currentState => {
      if (currentState.numMembers >= 4) return currentState
      return {
        numMembers: currentState.numMembers+= 1
      }
    })
  }

  onSubtractMember = () => {
    this.setState(currentState => {
      if (currentState.numMembers <= 1) return currentState
      return {
        numMembers: currentState.numMembers-= 1
      }
    })
  }

  onStartButtonPressed = () => {
    console.log("onStartButtonPressed")
  }

  render() {
    console.disableYellowBox = true
    StatusBar.setHidden(true)
    return (
      <View style={styles.container}>
        <HousepartyLayout numMembers={this.state.numMembers} />

        <TouchableOpacity style={styles.bottomWrapperStyle} activeOpacity={0.7} onPress={this.onStartButtonPressed}>
          <Text style={styles.textStyle}>Start Game</Text>
        </TouchableOpacity>

        <View style={styles.buttonWrapperStyle}>

          <TouchableOpacity style={styles.addMemberWrapper} activeOpacity={0.7} onPress={this.onSubtractMember}>
            <Text style={styles.textStyle}>-</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.subtractMemberWrapper} activeOpacity={0.7} onPress={this.onAddMember}>
            <Text style={styles.textStyle}>+</Text>
          </TouchableOpacity>
        </View>
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
    fontSize: 18,
    color: 'white',
    fontFamily: 'AvenirNext-Regular',
    fontWeight: '900',
    textAlign: 'center',
  },

  addMemberWrapper: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'black',
    borderRadius: 30,
    opacity: 0.8
  },


  subtractMemberWrapper: {
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'black',
    borderRadius: 30,
    opacity: 0.8,
    flex: 1
  },
  buttonWrapperStyle: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    height: 40,
    width: 80,
    flexDirection: 'row'
  }
});
