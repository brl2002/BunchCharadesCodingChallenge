
import React, { Component } from 'react'
import { Text, View, Dimensions, Image, StyleSheet } from 'react-native'

import members from '../members'

const { height, width } = Dimensions.get('window')

export default class CrappyLayout extends Component {

  renderMember = (member) => {
    const {avatar, color, name} = member


    return (
      <View key={color} style={[styles.memberContainer, {backgroundColor: color}]}> 
        <Image style={styles.imageStyle} source={avatar} resizeMode={'contain'}/>
      </View>
    )
  }

  renderMembers = () => {
    return Array.from({ length: this.props.numMembers }).map((x, i) => {
      const member = members[i]
      return this.renderMember(member)
    })
  }

  render() {
    return (
      <View style={{flex: 1}}>
        {this.renderMembers()}
      </View>
    )
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


