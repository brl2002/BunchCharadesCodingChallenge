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
import gifs from "./src/gifs";
import CountdownBar from "./src/components/CountdownBar";
import MusicPlayer from "./src/MusicPlayer";

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
        numMembers: 2,
        gameStatus: GameStatus.Idle,
        currentGif: 0,
        currentGifStatus: GifStatus.Waiting,
        correctStreak: 0,
    }

    this.music = new MusicPlayer();
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
        currentGifStatus: GifStatus.Waiting,
        correctStreak: 0
    });
    this.music.setMusic(true, 0);
  }

  onSelectPass = () => {
    this.setState({
        currentGifStatus: GifStatus.Pass,
        correctStreak: 0
    });
    this.music.setMusic(true, 0);
  }

  onSelectCorrect = () => {
    const correctStreak = this.state.correctStreak + 1;
    this.setState({
        currentGifStatus: GifStatus.Correct,
        correctStreak: correctStreak
    });
    console.log(correctStreak);
      this.music.setMusic(true, correctStreak);
  }

  onGifResultComplete = () => {
    if (this.state.currentGif < gifs.length) {
      this.setState({
          currentGif: this.state.currentGif + 1,
          currentGifStatus: GifStatus.Waiting
      });
    } else {
        this.endGame();
    }
  }

  onCountdownComplete = () => {
      this.endGame();
  }

  endGame() {
      LayoutAnimation.spring();
      this.setState({
          gameStatus: GameStatus.Idle
      });
      this.music.setMusic(false);
  }

  render() {
    console.disableYellowBox = true
    StatusBar.setHidden(true)
    return (
      <View style={styles.container}>
        <GifDisplay gameStatus={this.state.gameStatus} currentGif={this.state.currentGif} currentGifStatus={this.state.currentGifStatus} onGifResultComplete={this.onGifResultComplete}/>

        <CountdownBar gameStatus={this.state.gameStatus} onCountdownComplete={this.onCountdownComplete} />

        <CrappyLayout numMembers={this.state.numMembers} />

        <GameButtons gameStatus={this.state.gameStatus} onSelectPass={this.onSelectPass} onSelectCorrect={this.onSelectCorrect} />

        <MemberButtons gameStatus={this.state.gameStatus} onAddMember={this.onAddMember} onSubtractMember={this.onSubtractMember} onStartGame={this.onStartGame} />

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
