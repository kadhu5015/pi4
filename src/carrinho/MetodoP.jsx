import React, { Component } from "react";
import { View, Button, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { House, PawPrint, ShoppingBagOpen, UserCircle, CurrencyCircleDollar } from "phosphor-react";
import imagem1 from '../imagens/progresso2.png'

export default class MetodoPagamento extends Component {

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'hsla(0, 0%, 99%, 1)', overflowY: ' scroll', paddingTop: 16 }}>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 375, marginTop: 5, paddingHorizontal: 24 }}>
                    <View>
                        <Text style={styles.customTextTitle}>Método de pagamento</Text>
                        <Text style={styles.customTextTitleSubT}>Agora escolha a melhor forma de pagamento.</Text>
                    </View>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 24 }}>
                    <Image source={imagem1} style={{ width: 250, height: 40 }} />
                </View>

                <View style={{ marginHorizontal: 24, padding: 12, borderRadius: 6, flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(242, 242, 242, 1)' }}>
                    <CurrencyCircleDollar size={32} color="#009739" style={{ marginRight: 15 }} />
                    <View style={{ marginRight: 52 }}>
                        <Text style={{ fontWeight: 500, fontFamily: 'Roboto', color: 'rgba(0, 0, 0, 0.45)', letterSpacing: 0.1, fontSize: 14, marginRight: 15 }}>Valor total</Text> <Text style={{ fontWeight: 900, fontFamily: 'Roboto', color: 'rgba(0, 0, 0, 0.80)', letterSpacing: 0.25, fontSize: 24 }}>R$ 115,00</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 24, marginHorizontal: 24, justifyContent: 'space-between' }}>
                    <TouchableOpacity style={{ backgroundColor: '#005EB8', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 40, width: 156, borderRadius: 6 }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 14, fontFamily: 'Roboto', letterSpacing: 0.25 }} >Cartão de crédito</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 40, width: 156, borderRadius: 6, border: '1px solid #c3c3c3' }}>
                        <Text style={{ color: 'rgba(0, 0, 0, 0.45)', fontSize: 14, fontFamily: 'Roboto', letterSpacing: 0.25 }} >Boleto bancário</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'column', justifyContent: "space-between", height: 134, marginBottom: 32, marginHorizontal: 24, marginTop: 16 }}>
                    <TextInput
                        style={{ backgroundColor: "hsla(0, 0%, 95%, 1)", padding: 18, borderRadius: 12, marginBottom: 16 }}
                        placeholder="Número do cartão">
                    </TextInput>
                    <TextInput
                        style={{ backgroundColor: "hsla(0, 0%, 95%, 1)", padding: 18, borderRadius: 12, marginBottom: 16 }}
                        placeholder="Nome completo">
                    </TextInput>
                    <TextInput
                        style={{ backgroundColor: "hsla(0, 0%, 95%, 1)", padding: 18, borderRadius: 12, marginBottom: 16 }}
                        placeholder="Data de validade">
                    </TextInput>
                    <TextInput
                        style={{ backgroundColor: "hsla(0, 0%, 95%, 1)", padding: 18, borderRadius: 12, marginBottom: 16 }}
                        placeholder="CVV">
                    </TextInput>
                    <View>
                    <TouchableOpacity style={styles.customBtnBG1} onPress={() => this.props.navigation.navigate('MetodoP')}>
                        <Text style={styles.customBtnText}>FINALZAR COMPRA</Text>
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
    customBtnText: {
        fontSize: 14,
        lineHeight: 1.2,
        fontWeight: '500',
        color: "#fff",
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
