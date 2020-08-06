import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native'

import members from '../members'

const { height, width } = Dimensions.get('window')

export default class HousepartyLayout extends Component {
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
      <View style={styles.container}>
        {this.renderMembers()}
      </View>
    )
  }
}


const styles = StyleSheet.create({
  memberContainer: {
    flex: 1,
    width,
    alignContent: 'stretch',
    flexDirection: "row",
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain'
  },
  imageStyle: {
    flex: 1
  }
});

