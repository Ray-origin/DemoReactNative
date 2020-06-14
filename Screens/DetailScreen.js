
import React from 'react';
import {
  Button,
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

export default class DetailScreen extends React.Component{
  constructor (props){
    super(props)
    this.state ={
      count: 0
    }
  }

  static: any;

  onStart = () => {
    this.static = setInterval(() => {
      this.setState({
        count: this.state.count + 1,
      })
    }, 1000);
  }



  render(){
    const {count} = this.state
    return(
      <View style={style.container}>
        <Text >{count}</Text>
        <View style={style.button}>
          <Button 
            title="Start"
            onPress={this.onStart}
          />
        </View>
        {/* <Image style={style.image} source={{uri: 'https://genk.mediacdn.vn/thumb_w/640/2020/1/24/1-1579875068167961852028-crop-15798755023851716635168.jpeg'}}></Image> */}
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
  },
  button:{
    borderRadius: 10,
    width: 200,
    height:200,
  }
});
