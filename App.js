/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, TouchableOpacity, Dimensions, LayoutAnimation} from 'react-native';

import CrappyLayout from './src/layouts/CrappyLayout'

// Task 1: Complete Houseparty Layout

import HousepartyLayout from './src/layouts/HousepartyLayout'
import GifDisplay from "./src/components/GifDisplay";
import {GameStatus, GifStatus} from "./src/consts";

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      numMembers: 2,
      gameStatus: GameStatus.Idle,
      currentGif: 0,
      currentGifStatus: GifStatus.Waiting
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

  onStartGame = () => {
    LayoutAnimation.spring();
    this.setState({
        gameStatus: GameStatus.Running,
        currentGif: 0,
        currentGifStatus: GifStatus.Waiting
    });
  }

  render() {
    console.disableYellowBox = true
    StatusBar.setHidden(true)
    return (
      <View style={styles.container}>
        <GifDisplay gameStatus={this.state.gameStatus} currentGif={this.state.currentGif} currentGifStatus={this.state.currentGifStatus}/>

        <CrappyLayout numMembers={this.state.numMembers} />

        <TouchableOpacity style={styles.bottomWrapperStyle} activeOpacity={0.7} onPress={this.onStartGame}>
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
