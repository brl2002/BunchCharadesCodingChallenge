import React, { Component } from 'react'
import { Text, View, Dimensions, Image, StyleSheet, Animated } from 'react-native'

const { height, width } = Dimensions.get('window');

const BEAT_LENGTH = 480;

export default class MemberPortrait extends Component {
    state = {
        scale: new Animated.Value(1),
        rotation: new Animated.Value(0),
        animation: null
    };

    componentDidUpdate(prevProps) {
        if (prevProps.danceLevel !== this.props.danceLevel) {
            //🕺
            if (this.state.animation) {
                this.state.animation.stop();
            }
            this.state.scale.setValue(1);
            this.state.rotation.setValue(0);
            const danceLevel = Math.min(this.props.danceLevel, 3);
            let animation = null;
            switch (danceLevel) {
                case 1:
                    animation = Animated.loop(Animated.sequence([
                        Animated.timing(this.state.scale, {
                            toValue: 1.05,
                            duration: BEAT_LENGTH/2,
                            useNativeDriver: true
                        }),
                        Animated.timing(this.state.scale, {
                            toValue: 1,
                            duration: BEAT_LENGTH/2,
                            useNativeDriver: true
                        })
                    ])).start();
                    break;
                case 2:
                    this.state.rotation.setValue(-5);
                    animation = Animated.parallel([
                        Animated.loop(Animated.sequence([
                            Animated.timing(this.state.scale, {
                                toValue: 1.1,
                                duration: BEAT_LENGTH/2,
                                useNativeDriver: true
                            }),
                            Animated.timing(this.state.scale, {
                                toValue: 1,
                                duration: BEAT_LENGTH/2,
                                useNativeDriver: true
                            })
                        ])),
                        Animated.loop(Animated.sequence([
                            Animated.timing(this.state.rotation, {
                                toValue: 5,
                                duration: BEAT_LENGTH,
                                delay: BEAT_LENGTH,
                                useNativeDriver: true,
                            }),
                            Animated.timing(this.state.rotation, {
                                toValue: -5,
                                duration: BEAT_LENGTH,
                                delay: BEAT_LENGTH,
                                useNativeDriver: true,
                            })
                        ]))
                    ]).start();
                    break;
                case 3:
                    this.state.rotation.setValue(-10);
                    animation = Animated.parallel([
                        Animated.loop(Animated.sequence([
                            Animated.timing(this.state.scale, {
                                toValue: 1.15,
                                duration: BEAT_LENGTH/2,
                                useNativeDriver: true
                            }),
                            Animated.timing(this.state.scale, {
                                toValue: 1,
                                duration: BEAT_LENGTH/2,
                                useNativeDriver: true
                            })
                        ])),
                        Animated.loop(Animated.sequence([
                            Animated.timing(this.state.rotation, {
                                toValue: 10,
                                duration: BEAT_LENGTH,
                                useNativeDriver: true,
                            }),
                            Animated.timing(this.state.rotation, {
                                toValue: -10,
                                duration: BEAT_LENGTH,
                                useNativeDriver: true,
                            })
                        ]))
                    ]).start();
                    break;
            }
            this.setState({animation});
        }
    }

    render() {
        const {member} = this.props;

        const {avatar, color, name} = member;

        const scale = this.state.scale;
        const rotate = this.state.rotation.interpolate({
            inputRange: [0, 360],
            outputRange: ['0deg', '360deg']
        });

        return (
            <View key={color} style={[styles.memberContainer, {backgroundColor: color}]}>
                <Animated.Image style={{...styles.imageStyle, transform:[{scale}, {rotate}]}} source={avatar} resizeMode={'contain'}/>
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

