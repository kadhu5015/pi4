import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import feedback from '../imagens/feedback.svg'
import { Heart} from "phosphor-react";
import imagem from '../imagens/passeio.png'
import imagem2 from '../imagens/passeio2.png'

export default class CardVerticalS extends Component {

    render() {
        return (
            <View style={stylesCard.section,{marginHorizontal: 24}}>
                <Text style={stylesCard.customTextTitle} >Diversos</Text>
                <ScrollView style={stylesCard.scrollView} horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style = {{flexDirection: 'row'}}>

                    <TouchableOpacity style={stylesCard.containerCard} >
                        <View style={{flexDirection: 'row', justifyContent:'center'}}>
                            <View>
                                <Image source={imagem} style={{ width: 156, height: 110}} />
                            </View>
                            <Heart style={{fontSize: '24', color: "#FFFFFF", marginLeft: 1, position: 'absolute', right: 10, top:10}}/>
                        </View>

                        <View style={{marginRight: 8, paddingLeft: 10}}>
                            <Text style={{ fontFamily: 'Roboto', fontWeight: '500', fontSize: 14, lineHeight: 18, paddingTop:8 }}>Passeio diário com {"\n"}cachorro grande</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontFamily: 'Roboto', fontWeight: '500', fontSize: 10, lineHeight: 16, color: 'rgba(0, 0, 0, 0.45)' }}> ANTÔNIO FERNANDO</Text>
                            </View>
                            <View>
                                <Image source={feedback} style={{ width: 69, height: 14, marginTop: 4 }} />
                            </View>
                            <View >
                                <Text style={{ color: 'hsla(209, 100%, 36%, 1)', fontSize: 16, fontFamily: 'Roboto', lineHeight: 24, letterSpacing: 0.15, fontWeight: 500 }}>Ver preço</Text>
                            </View>
                        </View>
                    </ TouchableOpacity>

                    <TouchableOpacity style={stylesCard.containerCard} >
                        <View style={{flexDirection: 'row', justifyContent:'center'}}>
                            <View>
                                <Image source={imagem2} style={{ width: 156, height: 110}} />
                            </View>
                            <Heart style={{fontSize: '24', color: "#FFFFFF", marginLeft: 1, position: 'absolute', right: 10, top:10}}/>
                        </View>

                        <View style={{marginRight: 8, paddingLeft: 10}}>
                            <Text style={{ fontFamily: 'Roboto', fontWeight: '500', fontSize: 14, lineHeight: 18, paddingTop:8 }}>Saídas semanais com {"\n"}cachorro pequeno</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontFamily: 'Roboto', fontWeight: '500', fontSize: 10, lineHeight: 16, color: 'rgba(0, 0, 0, 0.45)' }}>MARCUS LUIS</Text>
                            </View>
                            <View>
                                <Image source={feedback} style={{ width: 69, height: 14, marginTop: 4 }} />
                            </View>
                            <View >
                                <Text style={{ color: 'hsla(209, 100%, 36%, 1)', fontSize: 16, fontFamily: 'Roboto', lineHeight: 24, letterSpacing: 0.15, fontWeight: 500 }}>Ver preço</Text>
                            </View>
                        </View>
                    </ TouchableOpacity>
                    
                    <TouchableOpacity style={stylesCard.containerCard} >
                        <View style={{flexDirection: 'row', justifyContent:'center'}}>
                            <View>
                                <Image source={imagem} style={{ width: 156, height: 110}} />
                            </View>
                            <Heart style={{fontSize: '24', color: "#FFFFFF", marginLeft: 1, position: 'absolute', right: 10, top:10}}/>
                        </View>

                        <View style={{marginRight: 8, paddingLeft: 10}}>
                            <Text style={{ fontFamily: 'Roboto', fontWeight: '500', fontSize: 14, lineHeight: 18, paddingTop:8 }}>Passeio diário com {"\n"}cachorro grande</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontFamily: 'Roboto', fontWeight: '500', fontSize: 10, lineHeight: 16, color: 'rgba(0, 0, 0, 0.45)' }}> ANTÔNIO FERNANDO</Text>
                            </View>
                            <View>
                                <Image source={feedback} style={{ width: 69, height: 14, marginTop: 4 }} />
                            </View>
                            <View >
                                <Text style={{ color: 'hsla(209, 100%, 36%, 1)', fontSize: 16, fontFamily: 'Roboto', lineHeight: 24, letterSpacing: 0.15, fontWeight: 500 }}>Ver preço</Text>
                            </View>
                        </View>
                    </ TouchableOpacity>

                    <TouchableOpacity style={stylesCard.containerCard} >
                        <View style={{flexDirection: 'row', justifyContent:'center'}}>
                            <View>
                                <Image source={imagem2} style={{ width: 156, height: 110}} />
                            </View>
                            <Heart style={{fontSize: '24', color: "#FFFFFF", marginLeft: 1, position: 'absolute', right: 10, top:10}}/>
                        </View>

                        <View style={{marginRight: 8, paddingLeft: 10}}>
                            <Text style={{ fontFamily: 'Roboto', fontWeight: '500', fontSize: 14, lineHeight: 18, paddingTop:8 }}>Saídas semanais com {"\n"}cachorro pequeno</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontFamily: 'Roboto', fontWeight: '500', fontSize: 10, lineHeight: 16, color: 'rgba(0, 0, 0, 0.45)' }}>MARCUS LUIS</Text>
                            </View>
                            <View>
                                <Image source={feedback} style={{ width: 69, height: 14, marginTop: 4 }} />
                            </View>
                            <View >
                                <Text style={{ color: 'hsla(209, 100%, 36%, 1)', fontSize: 16, fontFamily: 'Roboto', lineHeight: 24, letterSpacing: 0.15, fontWeight: 500 }}>Ver preço</Text>
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
        borderRadius: 6,
        backgroundColor: '#F2F2F2',
        marginRight: 8
    }

})