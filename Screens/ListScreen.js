import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  View,
} from 'react-native';

import ListItems from '../component/ListItems'


export default class ListScreen extends React.Component{

  constructor(props) {
    super(props) ;
    this.state= {
      categories: [
        {id: 1, name: 'Cậu bé ma 2'},
        {id: 2, name: 'Sadako'},
        {id: 3, name: 'Trolls'}
      ]
    };
  }

  render(){
    const {navigation} = this.props;
    const {categories} = this.state;
    return(
      <View >
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
});
