import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import imagem from '../imagens/foto_dog.png'
import feedback from '../imagens/feedback.svg'
import { Heart} from "phosphor-react";


export default class CardDestaque extends Component {

    render() {
        return (
            <View style={stylesCard.section}>
                <View style={stylesCard.customTextTitle} > Nossos destaques</View>
                <View style = {{flexDirection: 'row'}}>
                    <TouchableOpacity style={stylesCard.containerCard}>
                        <View>
                            <Image source={imagem} style={{ width: 85, height: 99, marginRight: 8 }} />
                        </View>

                        <View style={{marginRight: 8}}>
                            <Text style={{ fontFamily: 'Roboto', fontWeight: '500', fontSize: 14, lineHeight: 18, paddingTop:4 }}>Roupa para cachorro | P - XG</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontFamily: 'Roboto', fontWeight: '500', fontSize: 10, lineHeight: 16, color: '#009739' }}>24% OFF</Text><Text style={{ fontFamily: 'Roboto', fontWeight: '500', fontSize: 10, lineHeight: 16, color: 'rgba(0, 0, 0, 0.45)' }}> PETLOVE</Text>
                            </View>
                            <View>
                                <Image source={feedback} style={{ width: 69, height: 14, marginTop: 1 }} />
                            </View>
                            <View >
                                <Text style={{ fontFamily: 'Roboto', fontSize: 12, letterSpacing: 0.4, color: 'rgba(0, 0, 0, 0.6)', lineHeight: 16, marginTop: 8 }}>R$ 130,60</Text>
                                <Text style={{ color: '#009739', fontSize: 22, fontFamily: 'Roboto', lineHeight: 24, letterSpacing: 0.15, fontWeight: 700 }}>R$ 99,00</Text>
                            </View>
                        </View>
                        <Heart style={{fontSize: '24', color: "rgba(0, 0, 0, 0.45)", marginLeft: 1}}/>
                    </ TouchableOpacity>
                    
                </View>
            </View>
        )
    }
}

const stylesCard = StyleSheet.create({

    section: {
        flexDirection: 'column'
    },

    customTextTitle: {
        fontFamily: 'Roboto',
        marginTop: 24,
        marginBottom: 16,
        letterSpacing: 0.15,
        fontFamily: 'Roboto',
        fontWeight: 500,
        fontSize: 20,
        color: 'rgba(0, 0, 0, 0.87)',
        letterSpacing: 0.15
    },
    containerCard: {
        flexDirection: 'row',
        paddingBottom: 12,
        paddingTop: 12,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 6,
        backgroundColor: '#F2F2F2',
    }

})