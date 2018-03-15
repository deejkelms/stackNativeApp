import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native'
import { StackNavigator } from 'react-navigation'
import Home from './HomeScreen'


class LoginScreen extends Component {
  render() {
    const { navigate } = this.props.navigation

    return (
      <View>
        <Text>Login</Text>
        <Button onPress={() => navigate('Home')} title='Home'/>
      </View>
    )
  }
}

const LoginStackNavigator = StackNavigator({
  LoginScreen:{
    screen: LoginScreen
  },
  Home:{
    screen: Home
  }
}, {
  animationEnabled: true
})

export default LoginStackNavigator
