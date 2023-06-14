import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FavoriteNavigation from "./FavoriteNavigation";
import PokedexNavigation from "./PokedexNavigation";
import AccountNavigation from "./AccountNavigation";
import Icons from 'react-native-vector-icons/FontAwesome5'
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator initialRouteName="Pokedex">
        <Tab.Screen name="Favorite" component={FavoriteNavigation} options={{tabBarLabel: "Favoritos", tabBarIcon: ({color, size}) => (
            <Icons name="heart" color={color} size={size}></Icons>
        )}}></Tab.Screen>
        <Tab.Screen name="Pokedex" component={PokedexNavigation} options={{tabBarLabel:"",
            tabBarIcon: ()=> renderPokeball()}}></Tab.Screen>
        <Tab.Screen name="Account" component={AccountNavigation} options={{tabBarLabel: "Mi cuenta", tabBarIcon: ({color, size}) => (
            <Icons name="user" color={color} size={size}></Icons>
        )}}></Tab.Screen>
    </Tab.Navigator>
  )
}

function renderPokeball(){
    return (
        <Image
            source={require("../../assets/pokeball.png")}
            style={{width:70, height:70}}></Image>
    )
}