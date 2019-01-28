
import React, { Component } from 'react'
import { Text, View, Dimensions, Image, StyleSheet } from 'react-native'

import members from '../members'
import MemberPortrait from "../components/MemberPortrait";

const { height, width } = Dimensions.get('window');

export default class CrappyLayout extends Component {

  renderMembers = () => {
    return Array.from({ length: this.props.numMembers }).map((x, i) => {
      const member = members[i]
      return <MemberPortrait key={member.name} width={'100%'} member={member} danceLevel={this.props.danceLevel} />
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


