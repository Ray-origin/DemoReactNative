import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  Alert,
  TouchableOpacity,
  FlatList,
  CheckBox
} from 'react-native';
import data from './db.json';
import ListCheckExercise from '../component/ListCheckExercise';
import Result from './Result'

export default class DetailScreen extends React.Component{
  constructor (props){
    super(props)
    this.state ={
     count: 0,
      list: [],
      check: {},
      n:0
    }
  }
 
  //static: any;


  componentDidMount(){
    const _arr = this.props.route.params.arr;
    this.setState( {
      list: _arr
      
    });
  }
      componentDidMount(){
    const counter= this.props.route.params.exercise.count;
    this.setState({
      count:counter
    });
  }





  // onStart = () => {
  //   this.static = setInterval(() => {
  //     this.setState({
  //       count: this.state.count + 1,
  //     })
  //   }, 1000);
  // }
  
checkBox_Test = (id) => {
  const checkCopy = {...this.state.check}
  if (checkCopy[id]) {checkCopy[id] = false; this.setState({n:this.state.n -1})}
  else {checkCopy[id] = true; this.setState({n:this.state.n +1})}
  this.setState({ check: checkCopy });
}
  
  toggleChange(){
    this.setState({checked: !this.state.checked});
  }
  appButtonContainer=(arrL, m) =>{
    if(arrL===m){
    return{
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
    }
  }
  }

  Content =(arrL, m) =>{
    if(arrL===m){
      return{
        marginBottom:50
      }
    }
    else{
      return{
        marginBottom:20
      }
    }
  }

  render(){
    const {navigation} = this.props;
    const {count} = this.state.count;
    const {list}=this.state;
    const{n}=this.state;
  
    return(
      <View>
            <View style={this.Content(list.length,n)}>
            <FlatList 
              data={list}
              keyExtractor={item => `${item.id}`}
              renderItem={({ item, index }) => {
                return(
                <View style={style.List}> 
                <ListCheckExercise exercise ={item} />
                <CheckBox style={style.checkbox}
                   value = { this.state.check[item.id] }
                   onChange = {() => this.checkBox_Test(item.id) }
                  />
                </View>
              
              )
              
            }}
              extraData={this.state} 
            />
            </View>
            <View style={style.CustomButton}>
            <TouchableOpacity  style={this.appButtonContainer(list.length,n)} onPress={() => navigation.navigate('Result'),{Bcounter:counter}} >
                <Text  style={style.appButtonText}> The End </Text>
            </TouchableOpacity>
            </View>
        </View>
    );
  }
}
const style = StyleSheet.create({
  Content:{
    marginBottom:30
  },
  List:{
    
  },
  checkbox:{
    alignSelf:"center",
    padding:20
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