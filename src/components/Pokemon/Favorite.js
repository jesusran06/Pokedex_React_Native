import { View, Text } from 'react-native'
import React, {useEffect, useState} from 'react'
import  FontAwesome5  from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { addPokemonFavoriteApi, isPokemonFavoriteApi, removePokemonFavoriteApi } from '../../api/Favorite';

export default function Favorite(props) {
    const {id} = props;
    const [isFavorite, setisFavorite] = useState(undefined);
    const [reloadCheck, setreloadCheck] = useState(false);
    const Icon = isFavorite ? FontAwesome :FontAwesome5;

    useEffect(() => {
      (async () =>{
        try {
          const response = await isPokemonFavoriteApi(id);
          
          setisFavorite(response);
          
        } catch (error) {
          setisFavorite(false) 
        }
      })()
    }, [id, reloadCheck]);

    const onReloadCheckFavorite = () => {
      setreloadCheck((prev) => !prev)
     }

    const addFavorite = async () => {
        await addPokemonFavoriteApi(id);
        onReloadCheckFavorite();
    }

    const removeFavorite = async () =>{
      try {
        await removePokemonFavoriteApi(id);
        onReloadCheckFavorite();
      } catch (error) {
        
      }
    }

   
  return (
    <Icon 
        name="heart" 
        color="#fff" 
        size={30} 
        onPress={isFavorite ? removeFavorite : addFavorite}
        style={{marginRight: 20}}
    />
  );
}