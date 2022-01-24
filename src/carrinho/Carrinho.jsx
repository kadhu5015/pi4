import React, { Component } from "react";
import { View, Button, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { House, PawPrint, ShoppingBagOpen, UserCircle } from "phosphor-react";
import imagem1 from '../imagens/progresso.png'
import imagem from '../imagens/foto_dog.png'
import feedback from '../imagens/feedback.svg'
import { Heart, PencilLine, CurrencyCircleDollar } from "phosphor-react";

export default class Carrinho extends Component {

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'hsla(0, 0%, 99%, 1)', overflowY: ' scroll', paddingTop: 16 }}>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 375, marginTop: 5, paddingHorizontal: 24 }}>
                    <View>
                        <Text style={styles.customTextTitle}>Minha sacola</Text>
                        <Text style={styles.customTextTitleSubT}>Falta pouquinho para finalizar a compra!</Text>
                    </View>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 24 }}>
                    <Image source={imagem1} style={{ width: 250, height: 40 }} />
                </View>

                <View style={{ marginHorizontal: 24 }}>
                    <Text style={{ fontFamily: 'Roboto', fontSize: 16, lineHeight: 22, letterSpacing: 0.15, marginBottom: 4,fontWeight: 500, color: 'hsla(0, 0%, 0%, 1)' }}>
                        Produtos da compra (1)
                    </Text>

                    <View style={{ flexDirection: 'row', marginBottom: 16 }}>
                        <Text style={{ fontSize: 14, fontFamily: 'Roboto', lineHeight: 20, letterSpacing: 0.25, color: 'hsla(0, 0%, 0%, 0.6)' }}>
                            Subtotal:
                        </Text>
                        <Text style={{ fontSize: 14, fontFamily: 'Roboto', lineHeight: 20, fontWeight: 700, letterSpacing: 0.25, color: 'hsla(0, 0%, 0%, 1)' }}> 99,00</Text>
                    </View>

                    <TouchableOpacity style={stylesCard.containerCard} onPress={() => this.props.navigation.navigate('Produto')}>



                        <View>
                            <Image source={imagem} style={{ width: 85, height: 99, marginRight: 8 }} />
                        </View>

                        <View style={{ marginRight: 8 }}>
                            <Text style={{ fontFamily: 'Roboto', fontWeight: '500', fontSize: 14, lineHeight: 18, paddingTop: 4 }}>Roupa para cachorro | P - XG</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontFamily: 'Roboto', fontWeight: '500', fontSize: 10, lineHeight: 16, color: '#009739' }}>24% OFF</Text><Text style={{ fontFamily: 'Roboto', fontWeight: '500', fontSize: 10, lineHeight: 16, color: 'rgba(0, 0, 0, 0.45)' }}> PETLOVE</Text>
                            </View>
                            <View>
                                <Image source={feedback} style={{ width: 69, height: 14, marginTop: 1 }} />
                            </View>
                            <View >
                                <Text style={{ fontFamily: 'Roboto', fontSize: 12, letterSpacing: 0.4, color: 'rgba(0, 0, 0, 0.6)', lineHeight: 18, marginTop: 8, textDecoration: 'line-through' }}>R$ 130,60</Text>
                                <Text style={{ color: '#009739', fontSize: 22, fontFamily: 'Roboto', lineHeight: 24, letterSpacing: 0.15, fontWeight: 700 }}>R$ 99,00</Text>
                            </View>
                        </View>
                        <Heart style={{ fontSize: '24', color: "rgba(0, 0, 0, 0.45)", marginLeft: 1 }} />
                    </ TouchableOpacity>

                </View>

                <View style={{ marginVertical: 24, marginHorizontal: 24 }}>
                    <Text style={{ fontFamily: 'Roboto', fontSize: 16, lineHeight: 22, fontWeight: 500, marginBottom: 16, letterSpacing: 0.15, marginBottom: 4, color: 'hsla(0, 0%, 0%, 1)' }}>
                        Método de envio
                    </Text>

                    <TouchableOpacity style={{ flexDirection: 'row', paddingVertical: 10, paddingLeft: 12, alignItems: 'center', backgroundColor: 'hsla(0, 0%, 95%, 1)', borderRadius: 6, width: 320 }}>
                        <View style={{ width: 19, height: 19, marginRight: 12, borderRadius: 20, borderColor: 'hsla(0, 0%, 0%, 0.6)', borderBottomWidth: 1.5, borderTopWidth: 1.5, borderLeftWidth: 1.5, borderRightWidth: 1.5 }}>

                        </View>
                        <View>
                            <Text style={{ fontFamily: 'Roboto', fontWeight: 500, fontSize: 14, letterSpacing: 0.1, color: 'hsla(0, 0%, 0%, 0.6)', marginBottom: 4 }}>
                                Transportadora Correios
                            </Text>
                            <Text style={{ fontFamily: 'Roboto', fontWeight: 400, fontSize: 12, letterSpacing: 0.1, color: 'hsla(0, 0%, 0%, 0.6)' }}>
                                Entergue em até 15 dias úteis
                            </Text>
                        </View>
                        <View >
                            <Text style={{ fontFamily: 'Roboto', marginLeft: 24, fontWeight: 500, fontSize: 14, letterSpacing: -0.1, color: 'hsla(143, 100%, 30%, 1)' }}>
                                + R$ 10,00
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row', paddingVertical: 10, paddingLeft: 12, alignItems: 'center', backgroundColor: 'hsla(0, 0%, 95%, 1)', borderRadius: 6, width: 320, marginTop: 8 }}>
                        <View style={{ width: 19, height: 19, marginRight: 12, borderRadius: 20, borderColor: '#005EB8', borderBottomWidth: 5, borderTopWidth: 5, borderLeftWidth: 5, borderRightWidth: 5 }}>

                        </View>
                        <View>
                            <Text style={{ fontFamily: 'Roboto', fontWeight: 500, fontSize: 14, letterSpacing: 0.1, color: 'hsla(0, 0%, 0%, 0.8)', marginBottom: 4 }}>
                                Transportadora Ômega
                            </Text>
                            <Text style={{ fontFamily: 'Roboto', fontWeight: 400, fontSize: 12, letterSpacing: 0.1, color: 'hsla(0, 0%, 0%, 0.8)' }}>
                                Entergue em até 05 dias úteis
                            </Text>
                        </View>
                        <View >
                            <Text style={{ fontFamily: 'Roboto', marginLeft: 24, fontWeight: 500, fontSize: 14, letterSpacing: -0.1, color: 'hsla(143, 100%, 30%, 1)' }}>
                                + R$ 15,00
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ marginVertical: 16, marginHorizontal: 24 }}>
                    <Text style={{ fontFamily: 'Roboto', fontSize: 16, lineHeight: 22, fontWeight: 500, marginBottom: 16, letterSpacing: 0.15, marginBottom: 4, color: 'hsla(0, 0%, 0%, 1)' }}>
                        Local para entrega
                    </Text>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16, paddingBottom: 16, borderColor: 'hsla(0, 0%, 0%, 0.12)', borderBottomWidth: 1 }}>
                        <View>
                            <Text style={{ fontFamily: 'Roboto', fontSize: 12, color: 'rgba(0, 0, 0, 0.6)', marginBottom: 2 }} > Quixadá - CE</Text>
                            <Text style={{ fontFamily: 'Roboto', fontSize: 12, color: 'rgba(0, 0, 0, 0.8)', fontWeight: 500, marginBottom: 2 }}> Avenidade Aderaldo Junior Lopes</Text>
                            <Text style={{ fontFamily: 'Roboto', fontSize: 12, color: 'rgba(0, 0, 0, 0.6)', marginBottom: 2 }}> Nº 254 - Centro</Text>
                        </View>
                        <View>
                            <PencilLine style={{ fontSize: '24', color: "hsla(209, 100%, 36%, 1)", marginLeft: 85 }} />
                        </View>

                    </TouchableOpacity>

                    

                    <View style={{ marginTop: 24, padding: 12, borderRadius: 6, flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(242, 242, 242, 1)' }}>
                        <CurrencyCircleDollar size={32} color="#009739" style={{ marginRight: 15 }} />
                        <View style={{ marginRight: 52 }}>
                            <Text style={{ fontWeight: 500, fontFamily: 'Roboto', color: 'rgba(0, 0, 0, 0.45)', letterSpacing: 0.1, fontSize: 14, marginRight: 15}}>Valor total</Text> <Text style={{ fontWeight: 900, fontFamily: 'Roboto', color: 'rgba(0, 0, 0, 0.80)', letterSpacing: 0.25, fontSize: 24 }}>R$ 115,00</Text>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.customBtnBG1} onPress={() => this.props.navigation.navigate('MetodoP')}>
                        <Text style={styles.customBtnText}>MÉTODO DE PAGAMENTO</Text>
                    </TouchableOpacity>
                   

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
        marginBottom: 48,
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
