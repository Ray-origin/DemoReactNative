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

import ListItems from '../component/ListItems'


export default class ListScreen extends React.Component{

  constructor(props) {
    super(props) ;
    this.state= {
      categories: [
        {
        data:[
          {id: 1, name: 'ABS_BEGINNER', src:'../Images/theboy2.jpg'},
          {id: 2, name: 'CHEST_BEGINNER', src:'../Images/sadako.jpg'},
          {id: 3, name: 'ARM_BEGINNER', src:'../Images/trolls.jpg'},
          {id: 4, name: 'LEG_BEGINNER', src:'../Images/Chuyentau.jpg'}
        ],
        title:"BEGINNER"  
        },
        {
        data:[
          {id: 5, name: 'ABS_BEGINNER', src:'../Images/theboy2.jpg'},
          {id: 6, name: 'CHEST_BEGINNER', src:'../Images/sadako.jpg'},
          {id: 7, name: 'ARM_BEGINNER', src:'../Images/trolls.jpg'},
          {id: 8, name: 'LEG_BEGINNER', src:'../Images/Chuyentau.jpg'}
        ],
        title:"INTERMEDIATE"  
        }        
      ]
    };
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
          renderItem={({item}) => <ListItems ChangeID={item} onPress={() => navigation.navigate('DetailScreen')}/>}
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
    paddingLeft:20,
    paddingRight:20,
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
