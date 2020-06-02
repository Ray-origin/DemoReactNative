import React from 'react'
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import theboy2 from '../Images/theboy2.jpg'
import sadako from '../Images/sadako.jpg'
import trolls from '../Images/trolls.jpg'
import train from '../Images/Chuyentau.jpg'


export default function ListItems (props) {
    const { ChangeID,onPress } = props;
    return (
    <TouchableOpacity activeOpacity={0.5} 
      onPress={onPress}>  
      <View style={style.container}>
        <Text style={style.title}>{ChangeID.name} </Text>
        <Image style={style.ImageStyle} source = {theboy2}/>
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
    backgroundColor:'#FF4000',
    shadowColor:'#848484',
    shadowOpacity:1,
    shadowRadius:10,
    shadowOffset: { width:0, height:0 },
    marginBottom: 16
    //alignItems:'center',
  },
});