import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import feedback from '../imagens/feedback.svg'
import { Heart} from "phosphor-react";
import imagem from '../imagens/product-image.png'
import imagem2 from '../imagens/product-image2.png'

export default class CardVertical extends Component {

    render() {
        return (
            <View style={stylesCard.section,{marginHorizontal: 24}}>
                <Text style={stylesCard.customTextTitle} > Acessórios e higiene</Text>
                <ScrollView style={stylesCard.scrollView} horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style = {{flexDirection: 'row'}}>

                    <TouchableOpacity style={stylesCard.containerCard} >
                        <View style={{flexDirection: 'row', justifyContent:'center'}}>
                            <View>
                                <Image source={imagem} style={{ width: 110, height: 74}} />
                            </View>
                            <Heart style={{fontSize: '24', color: "rgba(0, 0, 0, 0.45)", marginLeft: 1}}/>
                        </View>

                        <View style={{marginRight: 8}}>
                            <Text style={{ fontFamily: 'Roboto', fontWeight: '500', fontSize: 14, lineHeight: 18, paddingTop:8 }}>Escova de pelos para{"\n"}cachorros e gatos</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontFamily: 'Roboto', fontWeight: '500', fontSize: 10, lineHeight: 16, color: 'rgba(0, 0, 0, 0.45)' }}> PETLOVE</Text>
                            </View>
                            <View>
                                <Image source={feedback} style={{ width: 69, height: 14, marginTop: 4 }} />
                            </View>
                            <View >
                                <Text style={{ color: '#0000000', fontSize: 22, fontFamily: 'Roboto', lineHeight: 24, letterSpacing: 0.15, fontWeight: 900 }}>R$ 19,99</Text>
                            </View>
                        </View>
                    </ TouchableOpacity>

                    <TouchableOpacity style={stylesCard.containerCard} >
                        <View style={{flexDirection: 'row', justifyContent:'center'}}>
                            <View>
                                <Image source={imagem2} style={{ width: 81, height: 74}} />
                            </View>
                            <Heart style={{fontSize: '24', color: "rgba(0, 0, 0, 0.45)", marginLeft: 1}}/>
                        </View>

                        <View style={{marginRight: 8}}>
                            <Text style={{ fontFamily: 'Roboto', fontWeight: '500', fontSize: 14, lineHeight: 18, paddingTop:8 }}>Coletor de fezes de{"\n"}PETS</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontFamily: 'Roboto', fontWeight: '500', fontSize: 10, lineHeight: 16, color: 'rgba(0, 0, 0, 0.45)' }}> JOÃO VICTOR</Text>
                            </View>
                            <View>
                                <Image source={feedback} style={{ width: 69, height: 14, marginTop: 4 }} />
                            </View>
                            <View >
                                <Text style={{ color: '#0000000', fontSize: 22, fontFamily: 'Roboto', lineHeight: 24, letterSpacing: 0.15, fontWeight: 900 }}>R$ 126,57</Text>
                            </View>
                        </View>
                    </ TouchableOpacity>

                    <TouchableOpacity style={stylesCard.containerCard} >
                        <View style={{flexDirection: 'row', justifyContent:'center'}}>
                            <View>
                                <Image source={imagem} style={{ width: 110, height: 74}} />
                            </View>
                            <Heart style={{fontSize: '24', color: "rgba(0, 0, 0, 0.45)", marginLeft: 1}}/>
                        </View>

                        <View style={{marginRight: 8}}>
                            <Text style={{ fontFamily: 'Roboto', fontWeight: '500', fontSize: 14, lineHeight: 18, paddingTop:8 }}>Escova de pelos para{"\n"}cachorros e gatos</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontFamily: 'Roboto', fontWeight: '500', fontSize: 10, lineHeight: 16, color: 'rgba(0, 0, 0, 0.45)' }}> PETLOVE</Text>
                            </View>
                            <View>
                                <Image source={feedback} style={{ width: 69, height: 14, marginTop: 4 }} />
                            </View>
                            <View >
                                <Text style={{ color: '#0000000', fontSize: 22, fontFamily: 'Roboto', lineHeight: 24, letterSpacing: 0.15, fontWeight: 900 }}>R$ 25,00</Text>
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
        width: 335
      
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
        paddingTop: 12,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 6,
        backgroundColor: '#F2F2F2',
        marginRight: 8
    }

})