
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
import ListCheckExercise from '../component/ListCheckExercise'

export default class DetailScreen extends React.Component{
  constructor (props){
    super(props)
    this.state ={
      count: 0,
      checkExercise: []
    }
  }
  
  //static: any;


  componentDidMount(){
    const kindCheck = this.props.route.params.checkKind;
    this.setState( {
      checkExercise: data.exercises.filter(x=>x.kind===kindCheck)
    });
  }





  onStart = () => {
    this.static = setInterval(() => {
      this.setState({
        count: this.state.count + 1,
      })
    }, 1000);
  }



  render(){
    const {navigation} = this.props;
    const {count} = this.state;
    const {checkExercise}=this.state;
    
  
    return(
      <View>
            <View style={style.Content}>
            <FlatList 
              data={checkExercise}
              keyExtractor={item => `${item.id}`}
              renderItem={({ item }) => <ListCheckExercise exercise ={item} />} 
            />
            </View>
            <View style={style.CustomButton}>
            <TouchableOpacity  style={style.appButtonContainer}>
                <Text  style={style.appButtonText} >Finish </Text>
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
