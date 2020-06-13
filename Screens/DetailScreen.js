
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  Alert,
  TouchableOpacity
} from 'react-native';

import ListExercise from '../component/ListExercise'
import { FlatList } from 'react-native-gesture-handler';

export default class DetailScreen extends React.Component{

  constructor(props) {
    super(props) ;
    this.state= {
     exercises: [
      {id:1 ,name: 'push up', time: '00:20'},
      {id:2 ,name: 'wash up', time: '00:30'},
      {id:4 ,name: 'head up', time: '16x'},
      {id:5 ,name: 'head up', time: '16x'},
      {id:6 ,name: 'head up', time: '16x'},
      {id:7 ,name: 'head up', time: '16x'},
      {id:8 ,name: 'head up', time: '16x'},
      ]
    };
  }

  render(){
    //var itemId= this.props.route.params.itemId;
    // var newData = data.filter(function(item){
        // return item.id===itemId;
  //})

    const {exercises}=this.state;
    return(
        <View>
            <View style={style.Content}>
            <FlatList 
              data={exercises}
              renderItem={({ item }) => <ListExercise exercise ={item} />} 
              keyExtractor={item => `${item.id}`}
            />
            </View>
            <View style={style.CustomButton}>
            <TouchableOpacity style={style.appButtonContainer}>
                <Text  style={style.appButtonText} >Start </Text>
            </TouchableOpacity>
            </View>
        </View>
    );
  }
}

const style = StyleSheet.create({
  Content:{
    marginBottom:50
  },
  /*</View>CustomButton:{
    position:'absolute', 
    bottom:0,
    justifyContent:'flex-end',
    width:'100%',
    height:'100%'
  },*/
  appButtonContainer: {
    position:'absolute',
    width:'95%',
    height:40,
    justifyContent:'center', 
    bottom:0,
    elevation: 8,
    backgroundColor: "black",
    borderRadius: 10,
    marginHorizontal:10,
    marginBottom:5
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});
