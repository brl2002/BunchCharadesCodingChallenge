import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, TouchableOpacity, Dimensions, LayoutAnimation} from 'react-native';
import {GameStatus} from "../consts";

export default class MemberButtons extends Component {

    render() {
        return (
            <View style={[styles.container, this.props.gameStatus == GameStatus.Idle && styles.containerActive]}>
                <View style={styles.bottomWrapperStyle}>
                    <TouchableOpacity style={[styles.buttonStyle, {width:150}]} activeOpacity={0.7} onPress={this.props.onStartGame}>
                        <Text style={styles.textStyle}>Start Game</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonWrapperStyle}>

                    <TouchableOpacity style={[styles.buttonStyle, {width:40}]} activeOpacity={0.7} onPress={this.props.onSubtractMember}>
                        <Text style={styles.textStyle}>-</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.buttonStyle, {width:40}]} activeOpacity={0.7} onPress={this.props.onAddMember}>
                        <Text style={styles.textStyle}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFill,
        display: 'none'
    },
    containerActive: {
        display: 'flex'
    },
    bottomWrapperStyle: {
        position: 'absolute',
        bottom: 5,
        height: 40,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    textStyle: {
        fontSize: 18,
        color: 'white',
        fontFamily: 'AvenirNext-Regular',
        fontWeight: '900',
        textAlign: 'center',
    },
    buttonStyle: {
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: 'black',
        borderRadius: 30,
        opacity: 0.8
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
