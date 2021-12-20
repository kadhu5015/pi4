import React, { Component } from "react";
import { View, Button, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { House, PawPrint, ShoppingBagOpen, UserCircle } from "phosphor-react";

export default class Perfil extends Component {

    render() {
        return (
            <View style={{ flex: 1,backgroundColor: 'hsla(0, 0%, 99%, 1)', paddingBottom:100}}>
                    <Text>Perfil</Text>
                    <View style={stylesBottomTab.container}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}><House size={24} color="#00000073" /></TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Pet')}><PawPrint size={24} color="#00000073" /></TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Carrinho')}><ShoppingBagOpen size={24} color="#00000073" /></TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Perfil')}><UserCircle size={24} weight="fill" color="rgba(0, 94, 184, 1)" /></TouchableOpacity>
                </View>
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
