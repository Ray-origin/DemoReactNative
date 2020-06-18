import React, { useState } from 'react'
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
    CheckBox
} from 'react-native'




export default function ListCheckExercise (props) {
    const { exercise, check} = props;
    const [isSelected, setSelection] = useState(false);
   
    return (
      
      <View style={style.container}>
        <View >
            <Image style={style.bigImage}  source = {{uri:exercise.src}}/>
        </View>
        <View >
            <Text >{exercise.time} </Text>
            <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={style.checkbox}
        />
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
      marginBottom: 16,
      alignItems:"center"
    },
    checkbox: {
        alignSelf: "center",
    },
    bigImage: {
        height:250,
        width:250
    },
  });