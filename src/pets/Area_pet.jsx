import React, { Component } from "react";
import { View, Button, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { House, PawPrint, ShoppingBagOpen, UserCircle, Info } from "phosphor-react";
import { ScrollView } from "react-native-gesture-handler";
import CardPetV from "./Card_pet_v";
import CardHorizontalP from "./Card_horizontalPet";

export default class Pets extends Component {

    render() {
        return (
            <View style={{ flex: 1,backgroundColor: 'hsla(0, 0%, 99%, 1)', paddingBottom: 60}}>
                    
                    <View style={stylesBottomTab.container}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}><House size={24} color="#00000073" /></TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Pet')}><PawPrint size={24} weight="fill" color="rgba(0, 94, 184, 1)"/></TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Carrinho')}><ShoppingBagOpen size={24} color="#00000073" /></TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Perfil')}><UserCircle size={24} color="#00000073" /></TouchableOpacity>
                    </View>
                <View style={{marginTop: 16}}>

                
                 {/*Titulo superior*/}
                 <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 375, marginTop:5, paddingHorizontal: 24}}>
                        <View>
                            <Text style={styles.customTextTitle}>Seção Pet</Text>
                            <Text style={styles.customTextTitleSubT}>Encontre o melhor bichinho para você!</Text>
                        </View>
                </View>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginHorizontal: 24, marginTop: 16}}>
                        <Text style={styles.chip_active} >Todos</Text>
                        <Text style={styles.chip} >Cachorro</Text>
                        <Text style={styles.chip} >Gato</Text>
                        <Text style={styles.chip} >Coelho</Text>
                        <Text style={styles.chip} >Porquinho da índia</Text>
                        <Text style={styles.chip} >Chinchila</Text>
                </ScrollView>
                <View style={{marginHorizontal: 24, justifyContent: 'space-between', marginTop: 24, flexDirection: 'row'}}>
                    <Text style={styles.customTextTitle} >Pets do dia</Text>
                    <Info size={24} color="#00000073"/>
                </View>
                <CardPetV></CardPetV>
                <View style={{marginHorizontal: 24, marginBottom: 10}}>
                    <Text style={styles.customTextTitle}>Outros pets</Text>
                </View>
                <CardHorizontalP></CardHorizontalP>
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
    chip_active:{
        fontFamily: 'Roboto',
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.4,
        color: 'white',
        paddingHorizontal: 24,
        paddingVertical: 6,
        backgroundColor: 'hsla(209, 100%, 36%, 1)',
        borderRadius: 8,
        borderRadius: 6
        
    },
    chip:{
        fontFamily: 'Roboto',
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.4,
        color: 'hsla(0, 0%, 0%, 0,6)',
        paddingHorizontal: 24,
        paddingVertical: 6,
        backgroundColor: 'hsla(0, 0%, 95%, 1)',
        marginLeft: 6,
        borderRadius: 6
    }
})
