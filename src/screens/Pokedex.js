import React, {useState, useEffect} from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {getPokemonsApi, getPokemonDetailsByUrlApi} from '../api/pokemon';
import PokemonList from '../components/PokemonList';

export default function Pokedex() {
    const [pokemons, setPokemons] = useState([]);
    const [nextUrl, setnextUrl] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      (async () => {
        await loadPokemons();
      })();
    }, []);

    const loadPokemons = async () => {
      try {
        setLoading(true);
        const response = await getPokemonsApi(nextUrl);

        setnextUrl(response.next);
  
        const pokemonsArray = [];
        for await (const pokemon of response.results) {
          const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);
  
          pokemonsArray.push({
            id: pokemonDetails.id,
            name: pokemonDetails.name,
            type: pokemonDetails.types[0].type.name,
            order: pokemonDetails.order,
            image: pokemonDetails.sprites.other["official-artwork"].front_default,
          });
        }
  
        setPokemons([...pokemons, ...pokemonsArray]);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    return (
        <SafeAreaView>
            <PokemonList pokemons={pokemons} loadPokemons={loadPokemons} isNext={nextUrl} isLoading={loading}></PokemonList>
        </SafeAreaView>
    )
}