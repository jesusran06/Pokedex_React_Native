import { StyleSheet, ActivityIndicator, FlatList, Platform } from 'react-native'
import React from 'react'
import PokemonCard from './PokemonCard';


export default function PokemonList(props) {
  const {pokemons, loadPokemons, isNext, isLoading} = props;
  const loadMore = () =>{
    loadPokemons();
  }
  return (
    <FlatList 
        data={pokemons} 
        numColumns={2} 
        showVerticalScrollIndicator={false}
        keyExtractor={(pokemon) => String(pokemon.id)}
        renderItem={({item}) => <PokemonCard pokemon={item}></PokemonCard> }
        contentContainerStyle={style.flatListContentContainer}
        onEndReached={!isLoading && isNext && loadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          isLoading &&
          isNext && (
          <ActivityIndicator 
            size={"large"} 
            style={style.spinner}
            color={'#AEAEAE'}>
          </ActivityIndicator>
          )
        }
    ></FlatList>
  )
}

const style = StyleSheet.create({
    flatListContentContainer: {
        paddingHorizontal: 5,
        marginTop: Platform.OS === 'android'? 30 :0
    },
    spinner:{
      marginTop:20,
      marginBottom: Platform.OS === "android" ? 90 : 60,
    }

})