import React, {useEffect, useState} from "react";
import { View, ScrollView } from "react-native";
import { getPokemonDetailsApi } from "../api/pokemon";
import Header from "../components/Pokemon/Header";
import Type from "../components/Pokemon/Type"
import Stats from "../components/Pokemon/Stats";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Favorite from "../components/Pokemon/Favorite";
import useAuth from "../hooks/useAuth";

export default function Pokemon(props) {
  const {route: {params}, navigation} = props;
  const [pokemon, setPokemon] = useState(null);
  const {auth} = useAuth();
  useEffect(()=> {
    (async ()=> {
      try {
        const response = await getPokemonDetailsApi(params.id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();

  },[params]);

  useEffect(()=>{
    navigation.setOptions({
      headerRight: () => <Favorite id={pokemon?.id}/>,
      headerLeft: () => (<Icon name="arrow-left" color="#fff" size={20} style={{marginLeft:20}} onPress={navigation.goBack}/>)
    })
  }, [navigation, params, pokemon])

  if(!pokemon) return null;
  return (
    <ScrollView>
      <Header 
        name={pokemon.name} 
        order={pokemon.order} 
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}>
      </Header>
      <Type types={pokemon.types}></Type>
      <Stats stats={pokemon.stats}></Stats>
    </ScrollView>
  );
}