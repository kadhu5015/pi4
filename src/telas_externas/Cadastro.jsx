import React, { Component } from "react";
import { View, Button, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import logo from '../imagens/logo.svg'


export default class Cadastro extends Component {

    render() {
        return (
            <View style={{ flex: 1,  width: 375, padding: 24, paddingTop: 8, backgroundColor: "#FCFCFC"}}>
                <View style={{top: 48}}>
                <View style={{ marginBottom: 48, alignItems: 'center' }}>
                    <Image source={logo} style={{ width: 131, height: 31 }} />
                </View>

                <View>
                    <Text style={styles.customTextTitle}>Criar conta</Text>
                </View>

                <View style={{flexDirection: 'column', justifyContent: "space-between", height: 534, marginBottom: 24}}>
                    <TextInput
                        style={{ backgroundColor: "hsla(0, 0%, 95%, 1)", padding: 18, borderRadius: 12 }}
                        placeholder="Digite seu nome">
                    </TextInput>
                    <TextInput
                        style={{ backgroundColor: "hsla(0, 0%, 95%, 1)", padding: 18, borderRadius: 12 }}
                        placeholder="Digite seu email">
                    </TextInput>
                    <TextInput
                        style={{ backgroundColor: "hsla(0, 0%, 95%, 1)", padding: 18, borderRadius: 12 }}
                        placeholder="Digite sua senha">
                    </TextInput>
                    <TextInput
                        style={{ backgroundColor: "hsla(0, 0%, 95%, 1)", padding: 18, borderRadius: 12 }}
                        placeholder="Número para contato">
                    </TextInput>
                    <TextInput
                        style={{ backgroundColor: "hsla(0, 0%, 95%, 1)", padding: 18, borderRadius: 12 }}
                        placeholder="Cidade">
                    </TextInput>
                    <TextInput
                        style={{ backgroundColor: "hsla(0, 0%, 95%, 1)", padding: 18, borderRadius: 12 }}
                        placeholder="Endereço">
                    </TextInput>
                    <TextInput
                        style={{ backgroundColor: "hsla(0, 0%, 95%, 1)", padding: 18, borderRadius: 12 }}
                        placeholder="Tipo de conta">
                    </TextInput>
                    
                </View>

                <View style={{ width: 327, height: 120, marginBottom: 24 }} >
                    <TouchableOpacity style={styles.customBtnBG1} onPress={() => this.props.navigation.navigate('Home')}>
                        <Text style={styles.customBtnText}>CADASTRAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.customBtnBG2} onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={styles.customBtnText2}>JÁ TENHO CONTA</Text>
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
        fontWeight: '700',
        color: 'rgba(0, 0, 0, 0.87)',
        marginBottom: 32,
        letterSpacing: 0.25
    },

    customTextSubT: {
        fontFamily: 'Roboto',
        fontSize: 16,
        lineHeight: 22,
        fontWeight: '500',
        color:"#005EB8",
        letterSpacing: 0.15,
        marginBottom: 32
    },

    customBtnText: {
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