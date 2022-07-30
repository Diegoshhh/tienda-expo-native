import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MyCartStack from './MyCartStack'
import AccountStack from './AccountStack'
import HomeStack from './HomeStack'
import { StyleSheet } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


const Tab = createBottomTabNavigator()

const Navigation = () => {
  return (
    <Tab.Navigator 
      screenOptions={{
        headerShown:false,
        tabBarShowLabel:false,
        tabBarStyle: styles.tabBar, 
      }}
    >
        <Tab.Screen 
          name='Home' 
          component={HomeStack}
          options={{
            tabBarIcon: ({focused}) => (
              <Ionicons name='home' size={24} color='black'/>
            )
          }}
        />
        <Tab.Screen 
          name='Cart' 
          component={MyCartStack}
          options={{
            tabBarIcon: ({focused}) => (
              <Ionicons name='cart' size={24} color='black'/>
            )
          }}
        />
        <Tab.Screen 
          name='Account' 
          component={AccountStack}
          options={{
            tabBarIcon: ({focused}) => (
              <Ionicons name='person' size={24} color='black'/>
            )
          }}
        />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBar:{
    shadowColor:'#7f5df0',
    shadowOffset:{
      width: 0, height:10,
    },
    shadowOpacity:0.25,
    shadowRadius:0.25,
    elevation:5,
    position: 'absolute',
    bottom: 10,
    left: 20,
    right: 20,
    borderRadius:15,
    height: 60,
    borderColor:'grey',
  },
  item:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  }
});

export default Navigation