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
import MemberButtons from "./src/components/MemberButtons";
import GameButtons from "./src/components/GameButtons";

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

        <GameButtons />

        <MemberButtons onAddMember={this.onAddMember} onSubtractMember={this.onSubtractMember} onStartGame={this.onStartGame} />

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
});
