import React, { useState } from 'react'
import {
    View,
    Image,
    Text,
    StyleSheet,
    Button
} from 'react-native'




export default function ListCheckExercise (props) {
    const { exercise, check} = props;
    
   
    return (
      
      <View style={style.container}>
        <View  >
            <Image style={style.bigImage}  source = {{uri:exercise.src}} />
        </View>
        <View style={style.centertext}>
            <Text style={{fontWeight:'bold'}} >{exercise.name} </Text>
            <Text style={{fontWeight:'bold'}} >{exercise.time} </Text>
           
        </View>
      </View>
    
    );
}


const style = StyleSheet.create({
    
    container:{
      padding:20,
      borderRadius:4,
      backgroundColor:'#A9F5F2',
      elevation:10,
      marginBottom: 0,
      alignItems:"center"
    },
    checkbox: {
        alignSelf: "center",
    },
    centertext:{
      alignItems:"center",
      fontWeight:'bold'
    },
    bigImage: {
        height:200,
        width:200
    },
  });