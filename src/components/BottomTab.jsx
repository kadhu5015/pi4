import React, { Component } from "react";
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { House, PawPrint, ShoppingBagOpen, UserCircle } from "phosphor-react";

export default class BottomTab1 extends Component {
  

  render() {
    console.log(this.props.navigation)
    return (
      <View style={stylesBottomTab.container}>
        <TouchableOpacity><House size={24} weight="fill" color="rgba(0, 94, 184, 1)" /></TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Pet')}><PawPrint size={24} color="#00000073"/></TouchableOpacity>
        <TouchableOpacity><ShoppingBagOpen size={24} color="#00000073" /></TouchableOpacity>
        <TouchableOpacity><UserCircle size={24} color="#00000073" /></TouchableOpacity>
        
      </View>
    )

  }
}

const stylesBottomTab = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: 375,
    height: 56,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 0, 0, 0.12)',
    zIndex: 1,
    position: 'fixed',
    top: 756,
    paddingVertical: 16,
    paddingHorizontal: 56,
    flexDirection: 'row',
    justifyContent: 'space-between',
  
  },


})