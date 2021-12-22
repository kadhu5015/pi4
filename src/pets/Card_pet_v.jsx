import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import feedback from '../imagens/feedback.svg'
import { Heart} from "phosphor-react";
import imagem from '../imagens/foto_gato.png'
import imagem2 from '../imagens/foto_cachorro.png'

export default class CardPetV extends Component {

    render() {
        return (
            <View style={stylesCard.section,{marginHorizontal: 24,marginVertical: 16}}>
                <ScrollView style={stylesCard.scrollView} horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style = {{flexDirection: 'row'}}>

                    <TouchableOpacity style={stylesCard.containerCard} >
                        <View style={{flexDirection: 'row', justifyContent:'center'}}>
                            <View>
                                <Image source={imagem} style={{ width: 156, height: 100}} />
                            </View>
                        </View>

                        <View style={{marginRight: 8, paddingLeft: 10}}>
                            <Text style={{ fontFamily: 'Roboto', fontWeight: '500', fontSize: 14, lineHeight: 18, paddingTop:8 }}>Gatinha Amora</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontFamily: 'Roboto', fontWeight: '500', fontSize: 10, lineHeight: 16, color: 'rgba(0, 0, 0, 0.45)' }}>MARIA LUANA</Text>
                            </View>
                            <View >
                                <Text style={{ color: 'hsla(209, 100%, 36%, 1)', fontSize: 14, fontFamily: 'Roboto', lineHeight: 24, letterSpacing: 0.15, fontWeight: 500 }}>Quixadá-CE</Text>
                            </View>
                        </View>
                    </ TouchableOpacity>

                    <TouchableOpacity style={stylesCard.containerCard} >
                        <View style={{flexDirection: 'row', justifyContent:'center'}}>
                            <View>
                                <Image source={imagem2} style={{ width: 156, height: 100}} />
                            </View>
                        </View>

                        <View style={{marginRight: 8, paddingLeft: 10}}>
                            <Text style={{ fontFamily: 'Roboto', fontWeight: '500', fontSize: 14, lineHeight: 18, paddingTop:8 }}>Dumbão</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontFamily: 'Roboto', fontWeight: '500', fontSize: 10, lineHeight: 16, color: 'rgba(0, 0, 0, 0.45)' }}>LUIZ FELIPE</Text>
                            </View>

                            <View >
                                <Text style={{ color: 'hsla(209, 100%, 36%, 1)', fontSize: 14, fontFamily: 'Roboto', lineHeight: 24, letterSpacing: 0.15, fontWeight: 500 }}>Mombaça-CE</Text>
                            </View>
                        </View>
                    </ TouchableOpacity>
                    
                    
                </View>
                </ScrollView>
            </View>
        )
    }
}

const stylesCard = StyleSheet.create({
    scrollView:{
        flex:1,
        width: 340
      
    },

    section: {
        flexDirection: 'column'
    },

    customTextTitle: {
        fontFamily: 'Roboto',
        marginTop: 24,
        marginBottom: 4,
        letterSpacing: 0.15,
        fontFamily: 'Roboto',
        fontWeight: 500,
        fontSize: 20,
        color: 'rgba(0, 0, 0, 0.87)',
        letterSpacing: 0.15
    },
    containerCard: {
        flexDirection: 'column',
        paddingBottom: 12,
        borderRadius: 6,
        backgroundColor: '#F2F2F2',
        marginRight: 14
    }

})