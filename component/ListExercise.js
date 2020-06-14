import React from 'react'
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'




export default function ListExercise (props) {
    const { exercise } = props;
    return (
      <View style={style.E_container}>
        <View style={style.ImageBeside}>
            <Image style={style.E_ImageStyle} source = {{uri:'https://i.pinimg.com/564x/99/d3/a7/99d3a7c25ad1ff811d192caf9f598b45.jpg'}}/>
        </View>
        <View style={style.TextBeside}>
            <Text style={style.E_title}>{exercise.name} </Text>
            <Text style={style.timing}>{exercise.time}</Text>
        </View>
      </View>
    
    );
}

const style = StyleSheet.create({
    ImageBeside:{
        
        width: 150,
        height: 100,
        alignItems:'center',
        justifyContent:'center'
    },
  E_ImageStyle:{
    width: 100,
    height: 70,
    
    //alignItems:'stretch'
  },
  TextBeside:{
    flex: 1,
    width: 100,
    height: 100,
    margin:0,
    padding:0,
  },

  E_title:{
    textTransform:'uppercase',
    marginBottom:8,
    fontWeight:'700',
    justifyContent:'center',
    fontSize:20
  },
  timing:{
    color:'gray'
  },
  E_container:{
    flex:1,
    backgroundColor:'white',
    borderBottomWidth:1,
    flexDirection:'row',
    alignItems:'stretch',
    height:100,
  },
});