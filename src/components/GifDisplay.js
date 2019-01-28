import React, { Component } from 'react'
import { Text, View, Dimensions, Image, StyleSheet, Animated, Easing } from 'react-native'
import { Emitter } from 'react-native-particles';

import gifs from '../gifs';
import {GameStatus, GifStatus} from "../consts";

const { height, width } = Dimensions.get('window')

class SingleGif extends Component {
    state = {
        scale: new Animated.Value(1),
        translate: new Animated.Value(0),
        opacity: new Animated.Value(1),
        resultOpacity: new Animated.Value(0),
        particles: false
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
                    toValue: this.props.status == GifStatus.Correct ? 1.5 : 0.7,
                    duration: 1000,
                    easing: Easing.out(Easing.cubic),
                }),
                Animated.timing(this.state.translate, {
                    toValue: this.props.status == GifStatus.Correct ? -height/3 : height/3,
                    duration: 500,
                    delay: 700,
                }),
                Animated.timing(this.state.opacity, {
                    toValue: 0,
                    duration: 200,
                    delay: 800,
                }),
            ]).start(this.props.onGifResultComplete)

            if (this.props.status == GifStatus.Correct) {
                this.setState({particles: true});
            }
        }
    }

    render() {
        const display = this.props.status !== false ? 'flex' : 'none';

        const particles =  this.state.particles &&
            <Emitter style={{...StyleSheet.absoluteFill}}
                numberOfParticles={50}
                emissionRate={20}
                interval={1}
                particleLife={1000}
                direction={-90}
                spread={360}
                speed={10}
                fromPosition={{ x: width/2, y: 100 }}
            >
                <View style={styles.particle} />
            </Emitter>;

        return (
            <Animated.View style={{...styles.singleGif, display, opacity: this.state.opacity, transform:[{translateY: this.state.translate}, {scale: this.state.scale}]}}>
                <Image style={styles.image} source={this.props.gif.image} resizeMode={'cover'}/>
                <Animated.View style={{...styles.result, opacity: this.state.resultOpacity}}>
                    {particles}
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
        backgroundColor: 'black',
        height: '0%',
    },
    gifDisplayActive: {
        height: '25%'
    },
    singleGif: {
        ...StyleSheet.absoluteFill,
    },
    image: {
        ...StyleSheet.absoluteFill,
        width: '100%',
        height: '100%'
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
    },
    particle: {
        width: 10,
        height: 10,
        backgroundColor: 'rgba(150,200,255,0.7)',
        borderRadius: 5
    }
});


