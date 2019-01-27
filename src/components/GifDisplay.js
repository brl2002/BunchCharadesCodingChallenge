import React, { Component } from 'react'
import { Text, View, Dimensions, Image, StyleSheet, Animated, Easing } from 'react-native'

import gifs from '../gifs';
import {GameStatus, GifStatus} from "../consts";

const { height, width } = Dimensions.get('window')

class SingleGif extends Component {
    state = {
        scale: new Animated.Value(1),
        translate: new Animated.Value(0),
        opacity: new Animated.Value(1),
        resultOpacity: new Animated.Value(0),
    }

    componentDidUpdate(prevProps) {
        if (prevProps.status == GifStatus.Waiting && this.props.status != GifStatus.Waiting) {
            this.state.resultOpacity.setValue(0);
            this.state.scale.setValue(1);
            this.state.translate.setValue(0);
            this.state.opacity.setValue(1);
            Animated.parallel([
                Animated.timing(this.state.resultOpacity, {
                    toValue: 1,
                    duration: 300
                }),
                Animated.timing(this.state.scale, {
                    toValue: this.props.status == GifStatus.Correct ? 1.3 : 0.7,
                    duration: 800,
                    easing: Easing.in(Easing.cubic),
                }),
                Animated.timing(this.state.translate, {
                    toValue: this.props.status == GifStatus.Correct ? -height/3 : height/3,
                    duration: 500,
                    delay: 500,
                }),
                Animated.timing(this.state.opacity, {
                    toValue: 0,
                    duration: 200,
                    delay: 800,
                }),
            ]).start(this.props.onGifResultComplete)

        }
    }

    render() {
        const opacity = this.props.status !== false ? this.state.opacity : 0;
        return (
            <Animated.View style={{...styles.singleGif, opacity: opacity, transform:[{translateY: this.state.translate}, {scale: this.state.scale}]}}>
                <Image style={styles.image} source={{uri: this.props.gif.url}} resizeMode={'cover'}/>
                <Animated.View style={{...styles.result, opacity: this.state.resultOpacity}}>
                    <Text style={styles.text}>{this.props.gif.word}</Text>
                </Animated.View>
            </Animated.View>
        );
    }
}


export default class GifDisplay extends Component {

    renderGifs() {
        return gifs.map((gif, i) => {
            const status = this.props.currentGif == i ? this.props.currentGifStatus : false;
            return <SingleGif key={i} gif={gif} status={status} onGifResultComplete={this.props.onGifResultComplete}/>
        }).reverse();
    }

    render() {
        return (
            <View style={[styles.gifDisplay, this.props.gameStatus == GameStatus.Running && styles.gifDisplayActive]}>
                {this.renderGifs()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    gifDisplay: {
        width,
        height: '0%',
    },
    gifDisplayActive: {
        height: '25%'
    },
    singleGif: {
        ...StyleSheet.absoluteFill,
    },
    image: {
        ...StyleSheet.absoluteFill
    },
    result: {
        ...StyleSheet.absoluteFill,
        backgroundColor: 'rgba(0,0,0,0.8)',
        justifyContent: 'center',
        alignItems: 'center',
        // opacity: 0,
    },
    text: {
        fontSize: 24,
        color: 'white',
        fontFamily: 'AvenirNext-Regular',
        fontWeight: '900',
        textAlign: 'center',
    }
});


