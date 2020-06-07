import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  View,
  Text,
} from 'react-native';

import ListItems from '../component/ListItems'


export default class ListScreen extends React.Component{

  constructor(props) {
    super(props) ;
    this.state= {
      categories: [
        {id: 1, name: 'ABS_BEGINNER', src:'../Images/theboy2.jpg'},
        {id: 2, name: 'CHEST_BEGINNER', src:'../Images/sadako.jpg'},
        {id: 3, name: 'ARM_BEGINNER', src:'../Images/trolls.jpg'},
        {id: 4, name: 'LEG_BEGINNER', src:'../Images/Chuyentau.jpg'}
      ]
    };
  }

  render(){
    const {navigation} = this.props;
    const {categories} = this.state;
    return(
      <View >
          <Text style={style.title}> Beginner</Text>
          <FlatList
            data={categories}
            renderItem={({ item }) => <ListItems ChangeID={item} onPress={() => navigation.navigate('DetailScreen')} />}
            keyExtractor={item => `${item.id}`}
            contentContainerStyle={style.container}
          />
      </View>

      
    );
  }
}

const style = StyleSheet.create({
  container:{
    paddingTop:16,
    paddingLeft:20,
    paddingRight:20,
  },
  title:{
    paddingLeft:20,
    //font-weight:bold;

  },
});
