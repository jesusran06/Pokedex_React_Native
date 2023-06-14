import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Account from '../screens/Account'

const stack = createStackNavigator();

export default function AccountNavigation() {
  return (
    <stack.Navigator>
        <stack.Screen name='Account' component={Account} options={{title: "Cuenta", headerTitleAlign: 'center'}}></stack.Screen>
    </stack.Navigator>
  )
}