import React, { Component } from 'react'
import { StyleSheet, Text, View, Image} from 'react-native'
import {
  Icon,
  Button,
  Container,
  Header,
  Content,
  Left
} from 'native-base'
import { TabNavigator } from 'react-navigation'

class Notifications extends Component {

  static navigationOptions = {
    drawerIcon:(
      <Image source={require('../assets/001-bell.png')}
             style={{height: 24, width: 24}}
      />
    )
  }

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
            <Text>Notifications</Text>
          </Content>
      </Container>
    )
  }
}

export default Notifications
