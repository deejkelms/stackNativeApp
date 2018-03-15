import React, { Component } from 'react'
import { StyleSheet, Text, View} from 'react-native'
import {
  Icon,
  Button,
  Container,
  Header,
  Content,
  Left
} from 'native-base'
import { TabNavigator } from 'react-navigation'
import Notifications from './Notifications'

class HomeScreen extends Component {
  render() {
    return (
      <Container>
          <Header>
            <Left>
              <Icon name='ios-menu' onPress={()=>
              this.props.navigation.navigate('DrawerOpen')} />
            </Left>
          </Header>
          <Content contentContainerStyle={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Text>Home Screen</Text>
          </Content>
      </Container>
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
