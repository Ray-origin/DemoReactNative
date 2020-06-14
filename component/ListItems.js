import React from 'react'
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
// import theboy2 from '../Images/theboy2.jpg'



export default function ListItems (props) {
    const { ChangeID,onPress,ChangeImg } = props;
    return (
    <TouchableOpacity activeOpacity={0.5} 
      onPress={onPress}>  
      <View style={style.container}>
        <Text style={style.title}>{ChangeID.name} </Text>
        <Image style={style.ImageStyle} source = {{uri:ChangeImg.src}}/>
      </View>
    </TouchableOpacity>
    );
}

const style = StyleSheet.create({
  ImageStyle:{
    width: 120,
    height: 120,
  },

  title:{
    textTransform:'uppercase',
    marginBottom:8,
    fontWeight:'700'
  },
  container:{
    padding:20,
    borderRadius:4,
    backgroundColor:'#A9F5F2',
    elevation:10,
    marginBottom: 16
  },
});