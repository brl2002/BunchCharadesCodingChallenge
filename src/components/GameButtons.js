import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, TouchableOpacity, Dimensions, LayoutAnimation} from 'react-native';

export default class GameButtons extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.button, styles.pass]}>
                    <Text style={styles.text}>Pass</Text>
                </View>
                <View style={[styles.button, styles.correct]}>
                    <Text style={styles.text}>Correct</Text>
                </View>
            </View>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row'
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
