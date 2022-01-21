import React, { Component } from "react";
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { ArrowLeft, Heart, CurrencyCircleDollar, ShoppingBagOpen } from "phosphor-react";
import dog_1 from '../imagens/dog_1.png'
import dog_2 from '../imagens/dog_2.png'
import icone from '../imagens/icone.png'
import feedback from '../imagens/feedback.svg'


export default class Produto extends Component {
    render() {
        return (
            <View style={{ backgroundColor: 'hsla(0, 0%, 99%, 1)' }}>
                <View style={styles.itens_cima} > <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}><ArrowLeft size={24} color="rgba(0, 0, 0, 0.6)" /></TouchableOpacity> <Text style={styles.texto} >DISPONÍVEL</Text>  <Heart size={24} color="rgba(0, 0, 0, 0.6)" /> </View>
                <ScrollView style={styles.scrollView} horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Image source={dog_2} style={{ width: 241, height: 226, marginRight: 16 }} />
                    <Image source={dog_1} style={{ width: 241, height: 226, marginRight: 16 }} />
                </ScrollView>

                <View style={{ marginTop: 32, flexDirection: 'row', marginHorizontal: 24, alignContent: 'center' }}><Image source={icone} style={{ width: 20, height: 20, marginRight: 8 }} /><Text style={{fontWeight: 500, fontFamily: 400, color: 'rgba(0, 0, 0, 0.45)'}}>PETLOVE</Text></View>
                <View style={{ marginHorizontal: 24 }}>
                    <Text style={styles.titulo_produto}>Roupa para cachorro | P - XG</Text>

                    <View style={{ flexDirection: 'row', height: 20 }}>
                        <Text style={{fontSize:16, color:'black', lineHeight: 24}}>Avaliação</Text>
                        <Image source={feedback} style={{ width: 90, height: 16, marginHorizontal: 8, marginTop: 6 }} />
                        <Text style={{ color: 'rgba(0, 0, 0, 0.45)' }}>(7)</Text>
                    </View>
                </View>

                <View style={{ marginTop: 24, padding: 12, borderRadius:6, flexDirection: 'row', marginHorizontal: 24, alignItems:'center', backgroundColor: 'rgba(242, 242, 242, 1)' }}>
                    <CurrencyCircleDollar size={32} color="#009739" style={{marginRight: 15}}/> 
                    <View style={{marginRight: 52}}>
                        <Text style={{fontWeight:500, fontFamily: 'Roboto', color: 'rgba(0, 0, 0, 0.45)', letterSpacing: 0.1, fontSize: 14, marginRight: 15, textDecoration: 'line-through'}}>R$ 130,60</Text> <Text style={{fontWeight:900, fontFamily: 'Roboto', color: 'rgba(0, 0, 0, 0.80)', letterSpacing: 0.25, fontSize: 34 }}>R$ 99,00</Text>
                    </View>
                    <Text style={{color: 'rgba(0, 151, 57, 1)', fontFamily: 'Roboto', fontSize: 14, fontWeight:500, marginBottom: 40}}> 24% OFF</Text>
                </View>    
                <View style={{marginHorizontal: 24, marginTop: 24, width: 327}}>
                    <Text style={{fontSize:16, lineHeight:20}}>Tamanhos disponíveis</Text>
                    <ScrollView style={{flexDirection:'row', marginTop: 8}} horizontal={true} showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity style={styles.itens_tam}><Text style={{color: 'rgba(0, 94, 184, 1)', fontSize:16}}>PP</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.itens_tam_nao_clicados}><Text style={{color: 'rgba(0, 0, 0, 0.6)', fontSize:16}}>P</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.itens_tam_nao_clicados}><Text style={{color: 'rgba(0, 0, 0, 0.6)', fontSize:16}}>M</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.itens_tam_nao_clicados}><Text style={{color: 'rgba(0, 0, 0, 0.6)', fontSize:16}}>G</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.itens_tam_nao_clicados}><Text style={{color: 'rgba(0, 0, 0, 0.6)', fontSize:16}}>GG</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.itens_tam_nao_clicados}><Text style={{color: 'rgba(0, 0, 0, 0.6)', fontSize:16}}>XG</Text></TouchableOpacity>
                        
                    </ScrollView>
                </View>

                <View style={{marginHorizontal: 24, marginTop: 24, width: 327}}>
                    <Text  style={{fontSize:16, color:'black', lineHeight: 24, marginBottom:2}}>Descrição do produto</Text>
                    <Text  style={{fontSize:14, color: 'rgba(0, 0, 0, 0.6)', letterSpacing: 0.25, lineHeight: 20}}>Blusa feita especialmente para manter o seu Pet confortável e protegido nos dias friozinhos. Temos disponíveis nas cores verde, cinza, amarela e preta. Vários tamanhos.</Text>
                </View>

                <View style={{ width: 327, height: 120, justifyContent: 'center', margin:24 }} >
                    <TouchableOpacity style={styles.customBtnBG1} onPress={() => this.props.navigation.navigate('Carrinho')}>
                    < ShoppingBagOpen size={24} color="#FFFFFF" style={{marginRight: 10}}/>
                    <Text style={styles.customBtnText}>COLOCAR NA SACOLA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.customBtnBG2} /*onPress={() => this.props.navigation.navigate('Cadastro')}*/>
                        <Text style={styles.customBtnText2}>AVALIAR PRODUTO</Text>
                    </TouchableOpacity>

                </View>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    scrollView: {
        width: 335,
        marginHorizontal: 24,
        marginTop: 16,

    },
    itens_cima: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 24,
        marginTop: 16,
        alignContent: 'center'
    },
    texto: {
        fontFamily: 'Roboto',
        fontSize: 10,
        fontWeight: 500,
        lineHeight: 16,
        color: 'hsla(143, 100%, 30%, 1)',
        paddingHorizontal: 8,
        paddingVertical: 4,
        backgroundColor: 'rgba(0, 151, 57, 0.1)',
        borderRadius: 6,
        letterSpacing: 1.5
    },
    titulo_produto: {
        fontSize: 24,
        lineHeight: 28.8,
        fontFamily: 'Roboto',
        fontWeight: 400,
        color: 'rgba(0, 0, 0, 1)',
        marginTop: 8

    }, 
    itens_tam:{
        width:45,
        height:45,
        borderRadius:100,
        border: '1px solid rgba(0, 94, 184, 1)',
        justifyContent:'center',
        alignItems:'center',
        marginRight: 16
    
    },
    itens_tam_nao_clicados:{
        width:45,
        height:45,
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center',
        marginRight: 16,
        border: '1px solid rgba(0, 0, 0, 0.12)',
    },
    customBtnText: {
        fontSize: 14,
        lineHeight: 18,
        fontWeight: '500',
        color: "#fff",
        
    },

    customBtnText2: {
        fontSize: 14,
        lineHeight: 1.2,
        fontWeight: '500',
        color: "#005EB8",
    },
    customBtnBG1: {
        fontFamily: 'Roboto',
        height: 52,
        marginBottom: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#005EB8",
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 12,
        letterSpacing: 1.25,
        flexDirection: "row"
    },

    customBtnBG2: {
        fontFamily: 'Roboto',
        height: 52,
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #005EB8',
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 12,
        letterSpacing: 1.25
    }
})

