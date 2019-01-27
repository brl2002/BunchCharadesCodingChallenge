
import React, { Component } from 'react'
import { Text, View, Dimensions, Image, StyleSheet } from 'react-native'

import members from '../members'
import MemberPortrait from "../components/MemberPortrait";

const { height, width } = Dimensions.get('window');

export default class CrappyLayout extends Component {

  renderMembers = () => {
    return Array.from({ length: this.props.numMembers }).map((x, i) => {
      const member = members[i]
      return <MemberPortrait key={member.name} member={member} danceLevel={this.props.danceLevel} />
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
});


