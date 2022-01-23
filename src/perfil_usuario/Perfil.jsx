import React, { Component } from "react";
import { View, Button, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { House, PawPrint, ShoppingBagOpen, TextAlignJustify, UserCircle, Cube,User, PencilLine, CaretDown } from "phosphor-react";
import {Avatar} from 'react-native-elements'


export default class Perfil extends Component {

    render() {
        return (
            <View style={{ flex: 1,backgroundColor: 'hsla(0, 0%, 99%, 1)', paddingBottom:100, alignItems:'center'}}>
                    <View style={{flexDirection:'row', justifyContent:'center', paddingBottom: 30,}}>
                        <Text style={styles.meuperfil}>Meu perfil</Text>
                        
                        <View style={{flexDirection:'row', alignItems:'center', marginTop:20}} >
                            <PencilLine style={{fontSize:25,paddingLeft: 140,color:'#009739'}}/>
                            <Text style={styles.editarperfil}>Editar perfil</Text>
                        </View>
                        
                    </View>
                    <View style={styles.containerCard}>

                        <Avatar
                            style={{width:100, height:100}}
                            rounded={true}
                            source={{
                                uri:'https://engenharia360.com/wp-content/uploads/2019/05/esta-pessoa-nao-existe-engenharia360-4.png'
                                
                            }}

                            
                        />
                        <Text style={styles.containerCardTextNome}>Arley Gomes de Sousa</Text>
                        <Text style={styles.containerCardText}>55 85 9878-6987</Text>
                        <CaretDown style={{paddingTop:12}}/>

                    </View>

                    <View style={styles.items}>
                        <Cube style={{fontSize:25, paddingLeft:20}}/>
                        <Text style={styles.itemsText}>Meus produtos</Text>
                    </View>
                    <View style={styles.items}>
                       <User style={{fontSize:25, paddingLeft:20}}/>
                        <Text style={styles.itemsText}>Meus serviços</Text>
                    </View>
                    <View style={styles.items}>
                        <PawPrint style={{fontSize:25, paddingLeft:20}}/>
                        <Text style={styles.itemsText}>Meus pets</Text>
                    </View>
                    
                    <TouchableOpacity style={styles.customBtnBG1} onPress={() => this.props.navigation.navigate('Home')}>
                        <Text style={styles.customBtnText}>INSERIR ALGO NOVO</Text>
                    </TouchableOpacity>

                    <View style={stylesBottomTab.container}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}><House size={24} color="#00000073" /></TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Pet')}><PawPrint size={24} color="#00000073" /></TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Carrinho')}><ShoppingBagOpen size={24} color="#00000073" /></TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Perfil')}><UserCircle size={24} weight="fill" color="rgba(0, 94, 184, 1)" /></TouchableOpacity>
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
    meuperfil:{
        fontFamily: 'Roboto',
        fontSize: 20,
        paddingLeft:0,
        paddingTop: 20,
        fontWeight: 'bold',
        //lineHeight: 22,
        color: "black",
        letterSpacing: 0.25
    },
    customBtnText: {
        fontSize: 14,
        lineHeight: 1.2,
        fontWeight: '500',
        color: "#fff",
    },
    customBtnBG1: {
        fontFamily: 'Roboto',
        height: 52,
        width:337,
        marginTop: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#005EB8",
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 12,
        letterSpacing: 1.25
    },
    editarperfil:{
        fontSize: 14,
        
       // paddingTop: 20,
        //lineHeight: 22,
        color: "#009739",
        letterSpacing: 0.25,
        flexDirection:'row'
        
     
    },
    items:{
        flexDirection:'row',
        backgroundColor: '#F2F2F2',
        marginTop: 20,
        //marginBottom: 10,
        borderRadius: 6,
        textAlign:'center',
        width: 327,
        height: 54,
        //justifyContent:'center',
        alignItems:'center',
        fontSize: 16,
       
    },
    itemsText:{
        paddingLeft: 20,
        fontSize: 16,
        color:'rgba(0, 0, 0, 0.8)'
    },
    
    containerCard: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
        paddingRight: 10,
        borderRadius: 6,
        backgroundColor: '#F2F2F2',
        width:327,
        height: 360
    },
    containerCardText:{
        textAlign:'center',
        paddingTop:12,
        fontSize: 16,
        color:'rgba(0, 0, 0, 0.6)'
    },
    containerCardTextNome:{
        textAlign:'center',
        paddingTop:12,
        fontSize: 16,
        fontWeight:'bold'
    },
    botao:{
        marginTop:20,
        width:327,
        height:360,
        borderRadius: 6

    },
    icons:{
        weight:54, 
        height:54,
        
    }
   
})