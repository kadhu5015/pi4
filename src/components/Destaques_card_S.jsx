import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import imagem from '../imagens/dog.png'
import feedback from '../imagens/feedback.svg'
import { Heart} from "phosphor-react";



export default class CardDestaqueS extends Component {

    render() {


        return (
            <View style={stylesCard.section,{marginHorizontal: 24}}>
                <Text style={stylesCard.customTextTitle} >Nossos destaques</Text>
                <ScrollView style={stylesCard.scrollView} horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style = {{flexDirection: 'row'}}>
                    
                    <TouchableOpacity style={stylesCard.containerCard}>
                        <View>
                            <Image source={imagem} style={{ width: 132, height: 116, marginRight: 16 }} />
                        </View>

                        <View style={{marginRight: 8}}>
                            <Text style={{ fontFamily: 'Roboto', fontWeight: '500', fontSize: 14, lineHeight: 18, marginTop: 8 }}>Banho em cachorro{"\n"}médio</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontFamily: 'Roboto', fontWeight: '500', fontSize: 10, lineHeight: 18, color: 'rgba(0, 0, 0, 0.45)' }}> PETLOVE</Text>
                            </View>
                            <View>
                                <Image source={feedback} style={{ width: 69, height: 14, marginTop: 1 }} />
                            </View>
                            <View >
                                <Text style={{ color: 'hsla(209, 100%, 36%, 1)', fontSize: 18, fontFamily: 'Roboto', lineHeight: 32, letterSpacing: 0.15, fontWeight: 700 }}>Ver preços</Text>
                            </View>
                        </View>
                        <Heart style={{fontSize: '24', color: "rgba(0, 0, 0, 0.45)", marginLeft: 1, marginTop:8}}/>
                    </ TouchableOpacity>

                    <TouchableOpacity style={stylesCard.containerCard}>
                        <View>
                            <Image source={imagem} style={{ width: 132, height: 116, marginRight: 8 }} />
                        </View>

                        <View style={{marginRight: 8}}>
                            <Text style={{ fontFamily: 'Roboto', fontWeight: '500', fontSize: 14, lineHeight: 18, marginTop: 8 }}>Banho em cachorro{"\n"}médio</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontFamily: 'Roboto', fontWeight: '500', fontSize: 10, lineHeight: 18, color: 'rgba(0, 0, 0, 0.45)' }}> PETLOVE</Text>
                            </View>
                            <View>
                                <Image source={feedback} style={{ width: 69, height: 14, marginTop: 1 }} />
                            </View>
                            <View >
                                <Text style={{ color: 'hsla(209, 100%, 36%, 1)', fontSize: 18, fontFamily: 'Roboto', lineHeight: 32, letterSpacing: 0.15, fontWeight: 700 }}>Ver preços</Text>
                            </View>
                        </View>
                        <Heart style={{fontSize: '24', color: "rgba(0, 0, 0, 0.45)", marginLeft: 1, marginTop:8}}/>
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
        flex: 1,
        flexDirection: 'column'
    },

    customTextTitle: {
        fontFamily: 'Roboto',
        marginTop: 24,
        marginBottom: 8,
        letterSpacing: 0.15,
        fontFamily: 'Roboto',
        fontWeight: 500,
        fontSize: 20,
        color: 'rgba(0, 0, 0, 0.87)',
        letterSpacing: 0.15
    },
    containerCard: {
        flexDirection: 'row',
        borderRadius: 6,
        backgroundColor: '#F2F2F2',
        marginRight: 8,
        paddingRight: 8
        
    }

})