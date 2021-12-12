import React, { Component } from "react";
import { View, Button, Text } from 'react-native';


export default class Login extends Component {

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <View style={{ width: 320}}>
                    <Text>Login</Text>
                </View>

            </View>
        )
    }
}