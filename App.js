import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { DrawerNavigator } from 'react-navigation'
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'

export default class App extends React.Component {
  render() {
    return (
      <AppDrawerNavigator/>
    );
  }
}

// const AppNavigator = StackNavigator({
//   LoginScreen: { screen: LoginScreen },
//   HomeScreen: { screen: HomeScreen }
// })

const AppDrawerNavigator = DrawerNavigator({
  LoginScreen: { screen: LoginScreen },
  HomeScreen: { screen: HomeScreen }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
