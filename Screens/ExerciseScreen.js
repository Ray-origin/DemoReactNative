
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

//import ListItems from '../component/ListItems'


export default class ExerciseScreen extends React.Component{

  
  
  render(){
    //var itemId= this.props.route.params.itemId;
    // var newData = data.filter(function(item){
        // return item.id===itemId;
  //})
    return(
      <View style={style.container}>
        
      </View>
      
    );
  }
}

const style = StyleSheet.create({
  container:{
    flex:1,
    //justifyContent:'center',
    alignItems:'center',
  },
  image:{
    width:200,
    height:200,
  }
});
