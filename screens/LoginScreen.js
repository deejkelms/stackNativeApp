import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native'
import { StackNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen'


class LoginScreen extends Component {
  render() {
    const { navigate } = this.props.navigation

    return (
      <View>
        <Text>Login</Text>
        <Button onPress={() => navigate('HomeScreen')} title='Home'/>
      </View>
    )
  }
}

const LoginStackNavigator = StackNavigator({
  LoginScreen:{
    screen: LoginScreen
  },
  HomeScreen:{
    screen: HomeScreen
  }
}, {
  animationEnabled: true
})

export default LoginStackNavigator
