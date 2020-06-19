import React from 'react';
import {
  SectionList,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  View,
  Text,

} from 'react-native';



export default class Guide extends React.Component{
  constructor(props) {
    super(props) ;
  } 
    render(){
      const GetGuide = this.props.route.params.getGuide;
      return(    
        <View style={{justifyContent:'center'}}>
             <Image style={style.custom} source = {{uri:GetGuide}}/>  
           </View>
        )
    }
}

const style = StyleSheet.create({
  custom:{
    height:'80%',
    width:"100%"

  }
});
