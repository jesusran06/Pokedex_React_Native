import { StyleSheet, View, Text } from 'react-native';
import {map, capitalize} from "lodash"
import React from 'react'
import getColorByPokemonType from '../../utils/getColorByPokemonType';
export default function tipos(props) {
    const {types} = props;
  return (
    <View style={styles.content}>
      {map(types, (item,index) => (
        <View key={index} style={{...styles.pill, backgroundColor: getColorByPokemonType(item.type.name)}}>
            <Text>{capitalize(item.type.name)}</Text>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
    content:{
        flexDirection:"row",
        marginTop: 50,
        alignItems:"center",
        justifyContent:'center',
    },
    pill:{
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 20,
        marginHorizontal:10,
    }
})