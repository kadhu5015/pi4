import React, { Component } from "react";
import { View, Button, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { House, PawPrint, ShoppingBagOpen, UserCircle, CurrencyCircleDollar } from "phosphor-react";
import imagem1 from '../imagens/progresso3.png'
import motoboy from '../imagens/motoboy.png'

export default class MetodoPagamento extends Component {

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'hsla(0, 0%, 99%, 1)', overflowY: ' scroll', paddingTop: 16 }}>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 375, marginTop: 5, paddingHorizontal: 24 }}>
                    <View>
                        <Text style={styles.customTextTitle}>Parabéns!</Text>
                        <Text style={styles.customTextTitleSubT}>Seu comprovante foi enviado para seu email, <br/>veja na sua caixa de mensagem.</Text>
                    </View>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 24 }}>
                    <Image source={imagem1} style={{ width: 250, height: 40, marginBottom:50 }} />
                    <Image source={motoboy} style={{ width: 280, height: 200}} />

                </View>

                <View style={{width:337}}>
                    <Text style={styles.customTextTitleSubT2}>Seu pedido já está sendo encaminhado para sua residência, agora pedimos que aguarde</Text>
                </View>


                <View style={{ flexDirection: 'column', justifyContent: "space-between", height: 134, marginBottom: 32, marginHorizontal: 24, marginTop: 16 }}>

                    <View>
                    <TouchableOpacity style={styles.customBtnBG1} onPress={() => this.props.navigation.navigate('Home')}>
                        <Text style={styles.customBtnText}>VER OUTROS PRODUTOS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.customBtnBG2} onPress={() => this.props.navigation.navigate('MetodoP')}>
                        <Text style={styles.customBtnText2}>VER MINHAS COMPRAS</Text>
                    </TouchableOpacity>
                </View>
                </View>

               


                <View style={stylesBottomTab.container}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}><House size={24} color="#00000073" /></TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Pet')}><PawPrint size={24} color="#00000073" /></TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Carrinho')}><ShoppingBagOpen size={24} weight="fill" color="rgba(0, 94, 184, 1)" /></TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Perfil')}><UserCircle size={24} color="#00000073" /></TouchableOpacity>
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
const styles = StyleSheet.create({
    customTextTitle: {
        fontFamily: 'Roboto',
        fontSize: 20,
        fontWeight: 500,
        lineHeight: 28,
        color: "rgba(0, 0, 0, 1)",
        letterSpacing: 0.15
    },
    customTextTitleSubT: {
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 22,
        color: "rgba(0, 0, 0, 0.7)",
        letterSpacing: 0.25
    },
    customTextTitleSubT2: {
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 22,
        color: "rgba(0, 0, 0, 0.7)",
        letterSpacing: 0.25,
        textAlign: 'center',
        paddingLeft:20,
        paddingTop: 40
    },
    customBtnBG1: {
        fontFamily: 'Roboto',
        height: 52,
        marginTop: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#005EB8",
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 12,
        letterSpacing: 1.25
    },
    customBtnBG2: {
        fontFamily: 'Roboto',
        height: 52,
        marginTop: 16,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: "#FFFFFF",
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 12,
        letterSpacing: 1.25,
        borderWidth: 1,
        borderColor:"#005EB8",
    },
    customBtnText: {
        fontSize: 14,
        lineHeight: 1.2,
        fontWeight: '500',
        color: "#fff",
    },
    customBtnText2: {
        fontSize: 14,
        lineHeight: 1.2,
        fontWeight: '500',
        color: "#005EB8",
    },
})

const stylesCard = StyleSheet.create({
    scrollView: {
        flex: 1,
        width: 337

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
        paddingBottom: 12,
        paddingTop: 12,
        paddingLeft: 6,
        paddingRight: 10,
        borderRadius: 6,
        backgroundColor: '#F2F2F2',
        marginRight: 8,

    },


})
