import React from 'react'
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    Button
} from 'react-native'
// import theboy2 from '../Images/theboy2.jpg'
import Video from 'react-native-video';


export default function ListItems (props) {
    const { ChangeID,onPress,ChangeImg } = props;
    return (
    <TouchableOpacity activeOpacity={0.5} 
      onPress={onPress}>  
      <View >
        <ImageBackground style={style.container} source = {{uri:ChangeImg.src}}>
        <Text style={style.title}>{ChangeID.name} </Text>
        {/* <Image style={style.ImageStyle} source = {{uri:ChangeImg.src}}/> */}
        </ImageBackground>
        
      </View>
    </TouchableOpacity>
    );
}

const style = StyleSheet.create({
  ImageStyle:{
    alignItems:'stretch',
    height: 20,
    margin:0,
    padding:0
  },

  title:{
    textTransform:'uppercase',
    marginBottom:8,
    fontWeight:'700',
    color:'#FFF',
    fontSize:20,
  },
  container:{
    padding:20,
    borderRadius:4,
    backgroundColor:'#A9F5F2',
    elevation:10,
    marginBottom: 16,
    height:150,
  },
});