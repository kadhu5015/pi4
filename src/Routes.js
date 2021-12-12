import Welcome from "./telas_externas/Welcome";
import Login from "./telas_externas/Login";
import Cadastro from "./telas_externas/Cadastro";
import Home from "./home/Home";

//Versão 5.x com modal
import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const StackPrincipal = createStackNavigator()
const StackRaiz = createStackNavigator()

function StackPrincipalTela(){
    return (
        <StackPrincipal.Navigator initialRouteName='Welcome'>
            <StackPrincipal.Screen name='Welcome' component={Welcome} options={{headerShown: false, title: 'Welcome'}}/>
            <StackPrincipal.Screen name='Login' component={Login} options={{headerShown: false, title: 'Entrar'}}/>
            <StackPrincipal.Screen name='Cadastro' component={Cadastro} options={{headerShown: false, title: 'Cadastro'}}/>
            <StackPrincipal.Screen name='Home' component={Home} options={{headerShown: false, title: 'Home'}}/>
        </StackPrincipal.Navigator>
    )
}

function StackRaizTela(){
    return(
        <NavigationContainer>
            <StackRaiz.Navigator>
                <StackRaiz.Screen name='Principal' component={StackPrincipalTela} options={{headerShown: false}}/>
            </StackRaiz.Navigator>
        </NavigationContainer>
    )
}

export default StackRaizTela

//Versão 5.x sem modal
/*import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'


const Stack = createStackNavigator() //navegação do tipo pilha
function  Routes(){
    return (
           <NavigationContainer>
               <Stack.Navigator initialRouteName='Home'>
                   <Stack.Screen name='Home' component={Home} />   
                   <Stack.Screen name='Calcular' component={IMCApp} options={{title: 'Calculadora de IMC'}}/>
                   <Stack.Screen name='Cadastro' component={Cadastro} options={{title: 'Cadastro'}}/>
                   <Stack.Screen name='Sobre' component={Sobre} options={{title: 'Sobre mim'}}/>
               </Stack.Navigator>
           </NavigationContainer> 
    )
}

export default Routes
*/