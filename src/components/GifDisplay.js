import React, { Component } from 'react'
import { Text, View, Dimensions, Image, StyleSheet } from 'react-native'

import gifs from '../gifs';
import {GameStatus} from "../consts";

const { height, width } = Dimensions.get('window')

class SingleGif extends Component {
    render() {
        const style = {position:'absolute', left:0, top:0, width:'100%', height:'100%'};
        if (!this.props.active) {
            style.display = 'none';
        }
        return (
            <View style={style}>
                <Image style={{width:'100%', height:'100%'}} source={{uri: this.props.gif.url}} resizeMode={'cover'}/>
            </View>
        );
    }
}


export default class GifDisplay extends Component {

    componentDidUpdate(prevProps) {
        if (prevProps.currentGifStatus != this.props.currentGifStatus) {
            // skip the result display for now
            this.props.onGifResultComplete();
        }
    }

    renderGifs() {
        return gifs.map((gif, i) => (
            <SingleGif gif={gif} active={this.props.currentGif == i}/>
        ));
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
});


