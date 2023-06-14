import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import getColorByPokemonType from '../utils/getColorByPokemonType';
import { capitalize } from 'lodash';
import { useNavigation } from '@react-navigation/native';

export default function PokemonCard(props) {
    const {pokemon} = props;
    const pokemonColor = getColorByPokemonType(pokemon.type)
    const bgStyles = {backgroundColor: pokemonColor, ...style.bgStyles}
    const navigation = useNavigation();
    const goToPokemon = ()=>{
        navigation.navigate("Pokemon", {id: pokemon.id})
    } 
  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
        <View style={style.card}>
            <View style={style.spacing}>
                <View style={bgStyles}>
                    <Text style={style.name}>{capitalize(pokemon.name)}</Text>
                    <Text style={style.number}>#{pokemon.order}</Text>
                    <Image source={{uri:pokemon.image}} style={style.image}></Image>
                </View>
                
            </View>
        </View>
    </TouchableWithoutFeedback>
  )
}

const style = StyleSheet.create({
    card: {
        flex: 1,
        height: 130,
    },
    spacing: {
        flex:1,
        padding: 5
    },
    image:{
        position: 'absolute',
        bottom: 2,
        right: 2,
        width: 90,
        height: 90
    },
    name:{
        color: "#fff",
        fontWeight : "bold",
        fontSize: 15,
        paddingTop: 10
    },
    bgStyles: {
        flex:1,
        borderRadius: 15,
        padding: 10
    },
    number: {
        position: "absolute",
        right: 10,
        top: 10,
        color: "#fff",
        fontSize: 11,
    },
})