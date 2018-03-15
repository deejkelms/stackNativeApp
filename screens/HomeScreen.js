import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

import { TabNavigator } from 'react-navigation'

class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Text>Home</Text>
      </View>
    )
  }
}

class Notifications extends Component {
  render(){
    return(
      <View>
        <Text>Notifications</Text>
      </View>
    )
  }
}

const HomeScreenTabNavigator = TabNavigator({
  HomeScreen:{
    screen: HomeScreen
  },
  Notifications:{
    screen: Notifications
  }
}, {
  animationEnabled: true
})

export default HomeScreenTabNavigator
