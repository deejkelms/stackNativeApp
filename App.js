import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { DrawerNavigator } from 'react-navigation'
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'
import Notifications from './screens/Notifications'

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
  HomeScreen: { screen: HomeScreen },
  Notifications: { screen: Notifications }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
