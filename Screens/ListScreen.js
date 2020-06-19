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
import axios from 'axios';
import data from './db.json';
import ListItems from '../component/ListItems';



export default class ListScreen extends React.Component{

  constructor(props) {
    super(props) ;
    this.state= {
      categories: []
    };
  } 
  componentDidMount(){
    
    this.setState( {
      categories: data.categories
    });
  }

  render(){
    const {navigation} = this.props;
    const {categories} = this.state;
    return(
        
        // <View >
        //     <FlatList
        //       data={categories}
        //       renderItem={({ item }) => <ListItems ChangeID={item} onPress={() => navigation.navigate('DetailScreen')} />}
        //       keyExtractor={item => `${item.id}`}
        //       contentContainerStyle={style.container}
        //     />
            
        // </View>    
        <View>
          <SectionList
          sections={categories}
          renderItem={({item}) => <ListItems ChangeID={item} ChangeImg={item} onPress={() => navigation.navigate('DScreen',{
            TittleName:item.name,
            GetKind:item.id,
            GetImage:item.src
          })}/>}
          keyExtractor={(item,index) => `${item.id}`}
          contentContainerStyle={style.container}
          renderSectionHeader={({section: { title } }) =>(
            <Text style={style.header}>{title}</Text>
          )}
          />
        </View>

      
    );
  }
}

const style = StyleSheet.create({
  container:{
    paddingTop:16,
    paddingLeft:16,
    paddingRight:16,
    
  },
  title:{
    paddingLeft:20,
    //font-weight:bold;
  },
  header:{
    fontSize:32,
    marginBottom:16,
  }
});
