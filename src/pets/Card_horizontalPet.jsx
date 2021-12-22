import React, { Component } from "react";
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import imagem from '../imagens/Florzinha.png'

export default class CardHorizontalP extends Component{
    render(){
        return(
            <View style={{marginHorizontal: 24}}>
                
                <TouchableOpacity style={styleCard.container}>
                        <View>
                            <Text style={styleCard.customTitle}>Florzinha linda</Text>
                            <Text style={styleCard.customSubttitle}>Adoção</Text>

                            <Text style={styleCard.customLocal}>Quixadá - CE</Text>
                            <Text style={styleCard.customLocal}>Rua João Carlos Fernando</Text>
                        </View>
                        <View>
                                <Image source={imagem} style={{ width: 100, height: 100}} />
                        </View>
                </TouchableOpacity>

                <TouchableOpacity style={styleCard.container}>
                        <View>
                            <Text style={styleCard.customTitle}>Flocos de neve</Text>
                            <Text style={styleCard.customSubttitle}>Adoção</Text>

                            <Text style={styleCard.customLocal}>Quixadá - CE</Text>
                            <Text style={styleCard.customLocal}>Avenida Ricardo Sales</Text>
                        </View>
                        <View>
                                <Image source={imagem} style={{ width: 100, height: 100}} />
                        </View>
                </TouchableOpacity>

                <TouchableOpacity style={styleCard.container}>
                        <View>
                            <Text style={styleCard.customTitle}>Arroz</Text>
                            <Text style={styleCard.customSubttitle}>Adoção</Text>

                            <Text style={styleCard.customLocal}>Quixadá - CE</Text>
                            <Text style={styleCard.customLocal}>Rua João Carlos Fernando</Text>
                        </View>
                        <View>
                                <Image source={imagem} style={{ width: 100, height: 100}} />
                        </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styleCard = StyleSheet.create({
    
    container:{
        marginBottom: 16,
        paddingHorizontal: 12,
        paddingVertical:12,
        backgroundColor: '#F2F2F2',
        borderRadius: 6,
        marginBottom: 8,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    customTitle:{
        fontSize: 20,
        lineHeight: 24,
        fontWeight: 500,
        color: 'hsla(0, 0%, 0%, 0,8)',
        letterSpacing: 0.15,
    },

    customSubttitle:{
        fontSize: 14,
        lineHeight: 20,
        color: '#F57EB5',
        fontWeight: 500,
        letterSpacing: 0.1,
        marginBottom: 16
    },

    customLocal:{
        fontSize: 12,
        lineHeight: 20,
        color: 'rgba(0, 0, 0, 0.6)',
        fontWeight: 400,
        letterSpacing: 0.1,
    }
})