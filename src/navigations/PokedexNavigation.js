import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Pokedex from '../screens/Pokedex'
import Pokemon from '../screens/Pokemon';

const stack = createStackNavigator();

export default function PokedexNavigation() {
  return (
    <stack.Navigator>
        <stack.Screen name='Pokedex' component={Pokedex} options={{title: "", headerTitleAlign: 'center', headerTransparent: true}}> 
        </stack.Screen>
        <stack.Screen name='Pokemon' component={Pokemon} options={{title: "", headerTransparent: true}}></stack.Screen>
    </stack.Navigator>
  )
}