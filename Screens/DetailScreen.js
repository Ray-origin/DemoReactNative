
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

//import ListItems from '../component/ListItems'


export default class DetailScreen extends React.Component{
  render(){
    return(
      <View style={style.container}>
        <Text>Detail</Text>
        <Image style={style.image} source={{uri: 'https://genk.mediacdn.vn/thumb_w/640/2020/1/24/1-1579875068167961852028-crop-15798755023851716635168.jpeg'}}></Image>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  image:{
    width:200,
    height:200,
  }
});
