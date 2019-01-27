import React, { Component } from 'react'
import { Text, View, Dimensions, Image, StyleSheet } from 'react-native'

const { height, width } = Dimensions.get('window');

export default class MemberPortrait extends Component {

    render() {
        const {member} = this.props;

        const {avatar, color, name} = member;

        return (
            <View key={color} style={[styles.memberContainer, {backgroundColor: color}]}>
                <Image style={styles.imageStyle} source={avatar} resizeMode={'contain'}/>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    memberContainer: {
        width,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    imageStyle: {
        flex: 1
    }
});

