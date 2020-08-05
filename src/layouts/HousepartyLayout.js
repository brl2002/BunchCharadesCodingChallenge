import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

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
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

