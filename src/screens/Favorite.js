import React, {useState, useEffect, useCallback} from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { getPokemonFavoriteApi, isPokemonFavoriteApi } from '../api/Favorite';
import useAuth from "../hooks/useAuth";
import { getPokemonDetailsApi } from '../api/pokemon';
import PokemonList from "../components/PokemonList";
import { useFocusEffect } from '@react-navigation/native';
import NoLogged from '../components/NoLogged';

export default function Favorite() {
  
  const [pokemons, setpokemons] = useState([]);
  const {auth} = useAuth();

  useFocusEffect(
    useCallback(() => {
      if(auth){
        (async () => {
          const response = await getPokemonFavoriteApi();
          const pokemonsArray = [];
          for await (const id of response) {
            const pokemonDetails = await getPokemonDetailsApi(id);
            pokemonsArray.push({
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              type: pokemonDetails.types[0].type.name,
              order: pokemonDetails.order,
              image: pokemonDetails.sprites.other["official-artwork"].front_default,
            });
          }
          setpokemons(pokemonsArray)
        })()
      } 
    }, [auth])
    
  )
  
  return (
    !auth ? <NoLogged/> : 
    <PokemonList pokemons={pokemons}/>
  )
}