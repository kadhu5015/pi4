import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import logo from '../imagens/logo.svg'
import imagem from '../imagens/imagem.svg'

export default class Welcome extends Component {

    render() {
        return (
            <View style={{ flex: 1, width: 375, padding: 24, paddingTop:8, alignItems: 'center', backgroundColor: "#FCFCFC" }}>
                <View style={{top: 48}}>
                <View style={{marginBottom: 24, alignItems: 'center' }}>
                <Image source={logo} style={{ width: 131, height: 31}}/>
                </View>

                <View style={{marginBottom: 24}}>
                <Image source={imagem} style={{ width: 327, height: 327, marginBottom: 24}}/>
                </View>
                
                <View>
                    
                    <Text style={styles.customTextTitle}>Bem-vindo</Text>
                    <Text style={styles.customTextSubT}>A melhor hora de cuidar ou ter um{"\n"}  bichinho é agora!</Text>
                </View>


                <View style={{ width: 327, height: 120 }} >
                    <TouchableOpacity style={styles.customBtnBG1} onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={styles.customBtnText}>ENTRAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.customBtnBG2} onPress={() => this.props.navigation.navigate('Cadastro')}>
                        <Text style={styles.customBtnText2}>CRIAR CONTA</Text>
                    </TouchableOpacity>

                </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    customTextTitle: {
        fontFamily: 'Roboto',
        fontSize: 34,
        lineHeight: 36,
        letterSpacing: 0.25,
        alignSelf: 'center',
        fontWeight: '700',
        color: 'rgba(0, 0, 0, 0.87)',
        marginBottom: 16,
        letterSpacing: 0.25
    },  

    customTextSubT: {
        fontFamily: 'Roboto',
        textAlign: 'center',
        fontSize: 18,
        lineHeight: 22,
        fontWeight: '400',
        color: 'rgba(0, 0, 0, 0.6)',
        marginBottom: 52,
        letterSpacing: 0.15
    },

    customBtnText: {
        fontFamily: 'Roboto',
        fontSize: 14,
        lineHeight: 1.2,
        fontWeight: '500',
        color: "#fff",
    },

    customBtnText2: {
        fontFamily: 'Roboto',
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
        letterSpacing: 1.25
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

});