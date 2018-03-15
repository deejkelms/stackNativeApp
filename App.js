import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import { StackNavigator } from 'react-navigation'
import { DrawerNavigator, DrawerItems } from 'react-navigation'
import LoginScreen from './screens/LoginScreen'
import Home from './screens/HomeScreen'
import Notifications from './screens/Notifications'

import {
  Container,
  Content,
  Header,
  Body,
  Icon
} from 'native-base'

export default class App extends React.Component {
  render() {
    return (
      <AppDrawerNavigator/>
    )
  }
}

const CustomDrawer = (props) => (
  <Container>
    <Header style={{ height: 200, backgroundColor: 'white' }}>
      <Body>
        <Image
          style={styles.drawerImage}
          source={require('./assets/myLogo.png')}
          />
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props}/>
    </Content>
  </Container>
)

const AppDrawerNavigator = DrawerNavigator({
  Home: { screen: Home },
  Notifications: { screen: Notifications }
}, {
  initialRouteName: 'Home',
  contentComponent: CustomDrawer,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle'
})
// the above drawer routes are mandatory but only if you are customizing the drawer navigator
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerImage:{
    height: 150,
    width:150,
    borderRadius:75
  }
})
