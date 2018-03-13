import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native'

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

export default LoginScreen
