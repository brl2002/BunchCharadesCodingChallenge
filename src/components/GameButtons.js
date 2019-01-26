import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, TouchableHighlight, Dimensions, LayoutAnimation} from 'react-native';
import {GameStatus} from "../consts";

export default class GameButtons extends Component {

    render() {
        return (
            <View style={[styles.container, this.props.gameStatus != GameStatus.Idle && styles.containerActive]}>
                <TouchableHighlight style={[styles.button, styles.pass]} onPress={this.props.onSelectPass}>
                    <Text style={styles.text}>Pass</Text>
                </TouchableHighlight>
                <TouchableHighlight style={[styles.button, styles.correct]} onPress={this.props.onSelectCorrect}>
                    <Text style={styles.text}>Correct</Text>
                </TouchableHighlight>
            </View>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        height: 0,
        flexDirection: 'row'
    },
    containerActive: {
        height: 50
    },
    button: {
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    pass: {
        backgroundColor: 'red'
    },
    correct: {
        backgroundColor: 'green'
    },
    text: {
        fontSize: 18,
        color: 'white',
        fontFamily: 'AvenirNext-Regular',
        fontWeight: '900',
        textAlign: 'center',
    },
});
