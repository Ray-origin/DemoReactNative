
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
  CheckBox,
  Linking
} from 'react-native';
import data from './db.json';
import ListCheckExercise from '../component/ListCheckExercise'

export default class DetailScreen extends React.Component{
  constructor (props){
    super(props)
    this.state ={
      count: 0,
      list: [],
      check: {},
      n:0,
      counter:0,
    
    }
  }
 
  //static: any;


  componentDidMount(){
    const _arr = this.props.route.params.arr;
    this.setState( {
      list: _arr
    });
    setInterval(() => {
      this.setState( prevState => ({counter: prevState.counter + 1}));
  },1000);
  }





  onStart = () => {
this.static = setInterval(() => {
  this.setState({
  count: this.state.count + 1,
  })
}, 1000);
}
  
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
 getTime=(counter) =>{

 }
  render(){
    const {navigation} = this.props;
    const {count} = this.state;
    const {list}=this.state;
    const{n}=this.state;
    const{counter}=this.state
   
    return(
      <View>
            {/* <Button
              title ="HOW TO DO IT"
              onPress={() => Linking.openURL('https://workoutlabs.com/exercise-guide/')}
            /> */}
            <View style={this.Content(list.length,n)}>
            <FlatList 
              data={list}
              keyExtractor={item => `${item.id}`}
              renderItem={({ item, index }) => {
                return(
                <View style={style.List}>
                   <TouchableOpacity  onPress={() => navigation.navigate('Guide',{getGuide:item.guide})}>  
                  <ListCheckExercise exercise ={item} onPress={() => navigation.navigate('Result')} />
                  </TouchableOpacity>
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
            <TouchableOpacity  style={this.appButtonContainer(list.length,n)} onPress={() => {

              navigation.navigate('Result',{
              timeResult:counter
            })}} >
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
