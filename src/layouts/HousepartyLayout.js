
import React, { Component } from 'react'
import { Text, View, Dimensions, Image, StyleSheet } from 'react-native'

import members from '../members'
import MemberPortrait from "../components/MemberPortrait";

const { height, width } = Dimensions.get('window');

export default class HousepartyLayout extends Component {

    renderMembers = () => {
        return Array.from({ length: this.props.numMembers }).map((x, i) => {
            const member = members[i];
            let width;
            switch (this.props.numMembers) {
                case 1:
                  width = '100%';
                  break;
                case 2:
                  width = '100%';
                  break;
                case 3:
                  width = i == 2 ? '100%' : '50%';
                  break;
                case 4:
                  width = '50%';
                  break;
            }
            return <MemberPortrait key={member.name} width={width} member={member} danceLevel={this.props.danceLevel} />
        })
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderMembers()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'stretch'
    }
});


