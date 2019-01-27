import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, TouchableHighlight, Dimensions, Animated, Easing} from 'react-native';
import {GameLength, GameStatus} from "../consts";

export default class CountdownBar extends Component {
    state = {
        percentRemaining: new Animated.Value(100)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.gameStatus != GameStatus.Running && this.props.gameStatus == GameStatus.Running) {
            this.state.percentRemaining.setValue(100);
            console.log(this.state.percentRemaining, 'starting');
            Animated.timing(
                this.state.percentRemaining, {
                    toValue: 0,
                    duration: GameLength,
                    easing: Easing.linear
                }
            ).start(this.props.onCountdownComplete);
        }
    }

    render() {
        const fillWidth = this.state.percentRemaining.interpolate({
            inputRange: [0, 100],
            outputRange: ['0%', '100%']
        });
        return (
            <View style={[styles.bar, this.props.gameStatus == GameStatus.Running && styles.barActive]}>
                <Animated.View style={{...styles.fill, width: fillWidth}} />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    bar: {
        width: '100%',
        height: 0,
        backgroundColor: 'white'
    },
    barActive: {
        height: 10
    },
    fill: {
        ...StyleSheet.absoluteFill,
        backgroundColor: 'purple'
    }
});