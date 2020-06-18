import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  Alert,
  TouchableOpacity,
  FlatList
} from 'react-native';
import data from './db.json';
import ListExercise from '../component/ListExercise'
// import { FlatList } from 'react-native-gesture-handler';

export default class DetailScreen extends React.Component{

  constructor(props) {
    super(props) ;
    this.state= {
     exercises: [],
    
    };
    
  }
  
  componentDidMount(){
    const getKind = this.props.route.params.GetKind;
    this.setState( {
      exercises: data.exercises.filter(x=>x.kind===getKind)
    });
  }
  render(){
    //var itemId= this.props.route.params.itemId;
    // var newData = data.filter(function(item){
        // return item.id===itemId;
  //})
    const {navigation} = this.props;
    const {exercises}=this.state;
    const getKind = this.props.route.params.GetKind;
   
    return(
        <View>
            <View style={style.Content}>
            <FlatList 
              data={exercises}
              renderItem={({ item }) => <ListExercise exercise ={item}/>
              } 
              keyExtractor={item => `${item.id}`}
            />
            </View>
            <View style={style.CustomButton}>
            <TouchableOpacity style={style.appButtonContainer} onPress={() => navigation.navigate('DetailScreen',{
              
              checkKind: getKind
            })}>
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