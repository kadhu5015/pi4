import React, { Component } from "react";
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MagnifyingGlass, Heart, Package, Users} from "phosphor-react";
import CardDestaque from "../components/Destaques_card";
import CardVertical from "../components/Card_vertical_hig_ace";
import CardVertical_d from "../components/Card_vertical_div"

import { House, PawPrint, ShoppingBagOpen, UserCircle } from "phosphor-react";



export default class HomeS extends Component {

    render() {
        return (
            <View style={{ flex: 1,backgroundColor: 'hsla(0, 0%, 99%, 1)', paddingBottom:100 }}>
               
               <View style={stylesBottomTab.container}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}><House size={24} weight="fill" color="rgba(0, 94, 184, 1)" /></TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Pet')}><PawPrint size={24} color="#00000073"/></TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Carrinho')}><ShoppingBagOpen size={24} color="#00000073" /></TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Perfil')}><UserCircle size={24} color="#00000073" /></TouchableOpacity>
                </View>
               
                <View style={{ top: 16 }}>
                    {/*Titulo superior*/}
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 375, marginTop:5, paddingHorizontal: 24}}>
                        <View>
                            <Text style={styles.customTextTitle}>Olá, Arley</Text>
                            <Text style={styles.customTextTitleSubT}>Ficamos felizes de você estar aqui!</Text>
                        </View>
                        <TouchableOpacity style={styles.customBtnFav} onPress={() => this.props.navigation.navigate('Pet')}>
                            <Heart style={{ fontSize: 24, color: "rgba(0, 0, 0, 0.45)" }} />
                        </TouchableOpacity>
                    </View>

                    {/*Campo de pesquisa*/}
                    <View  style={{ backgroundColor: "rgba(242, 242, 242, 1)", padding: 13, borderRadius: 6, marginTop: 16, flexDirection: 'row', alignItems: 'center', marginHorizontal:24}}>
                        <MagnifyingGlass style={{ fontSize: 24, color: "rgba(0, 0, 0, 0.45)", marginRight: 8}} />
                        <TextInput
                            style={{fontSize: 16, lineHeight: 29, width:300}}
                            placeholder="Pesquisar">
                        </TextInput>
                    </View>

                    {/*Botões de navegação*/}
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 24, marginHorizontal: 24, justifyContent: 'space-between' }}>
                        
                        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', justifyContent:'center', height:40, width:156, borderRadius: 6, border: '1px solid #c3c3c3'}} onPress={() => this.props.navigation.navigate('Home')}>
                            <Package  style={{ fontSize: 24, color: "rgba(0, 0, 0, 0.45)" }}  /> <Text style={{color: 'rgba(0, 0, 0, 0.45)', marginLeft: 10, fontSize:14, fontFamily: 'Roboto', letterSpacing: 0.25}}  >Produtos</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={{backgroundColor: '#005EB8', flexDirection: 'row', alignItems: 'center', justifyContent:'center', height:40, width:156, borderRadius: 6}}  onPress={() => this.props.navigation.navigate('Servico')}>
                            <Users style={{ fontSize: 24, color: "rgba(252, 252, 252, 1)" }}/> <Text style={{color: '#FFFFFF', marginLeft: 10, fontSize:14, fontFamily: 'Roboto',  letterSpacing: 0.25}}>Serviços</Text>
                        </TouchableOpacity>
                    </View>
              
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
    customBtnFav: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        backgroundColor: 'hsla(0, 0%, 95%, 1)',
        borderRadius: 6
    }
})