import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Favorite from '../screens/Favorite'
import Pokemon from '../screens/Pokemon'

const stack = createStackNavigator();

export default function FavoriteNavigation() {
  return (
    <stack.Navigator>
        <stack.Screen name='Favorite' component={Favorite} options={{title: "Favoritos", headerTitleAlign: 'center'}}></stack.Screen>
        <stack.Screen name='Pokemon' component={Pokemon} options={{title: "", headerTransparent: true}}></stack.Screen>
    </stack.Navigator>
  )
}