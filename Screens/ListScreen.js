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
          {id: 1, name: 'ABS_BEGINNER', src:'https://www.telegraph.co.uk/content/dam/men/2016/07/25/FFX9WJ_trans%2B%2BZgEkZX3M936N5BQK4Va8RWtT0gK_6EfZT336f62EI5U.jpg'},
          {id: 2, name: 'CHEST_BEGINNER', src:'https://outliveforever.com/wp-content/uploads/2019/02/best-bodyweight-workout-no-equipment-home-men-women-married-beginner.jpg'},
          {id: 3, name: 'ARM_BEGINNER', src:'https://images.ctfassets.net/90pc6zknij8o/10BAFJIPh1f7ycYYDkqr2C/98a195353bfdbfb587a3da0455b5ffec/arm-workouts-at-home-exercises-e1537804339687.jpg?w=1200&h=630&fl=progressive&q=50&fit=fill&f=faces'},
          {id: 4, name: 'LEG_BEGINNER', src:'https://thehomefitfreak.com/wp-content/uploads/2018/10/beginner-guide-fascia-training-feature-source.jpg'}
        ],
        title:"BEGINNER"  
        },
        {
        data:[
          {id: 5, name: 'ABS_INTERMEDIATE', src:'https://www.telegraph.co.uk/content/dam/men/2016/07/25/FFX9WJ_trans%2B%2BZgEkZX3M936N5BQK4Va8RWtT0gK_6EfZT336f62EI5U.jpg'},
          {id: 6, name: 'CHEST_INTERMEDIATE', src:'https://outliveforever.com/wp-content/uploads/2019/02/best-bodyweight-workout-no-equipment-home-men-women-married-beginner.jpg'},
          {id: 7, name: 'ARM_INTERMEDIATE', src:'https://images.ctfassets.net/90pc6zknij8o/10BAFJIPh1f7ycYYDkqr2C/98a195353bfdbfb587a3da0455b5ffec/arm-workouts-at-home-exercises-e1537804339687.jpg?w=1200&h=630&fl=progressive&q=50&fit=fill&f=faces'},
          {id: 8, name: 'LEG_INTERMEDIATE', src:'https://thehomefitfreak.com/wp-content/uploads/2018/10/beginner-guide-fascia-training-feature-source.jpg'}
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
          renderItem={({item}) => <ListItems ChangeID={item} ChangeImg={item} onPress={() => navigation.navigate('DetailScreen',{
            TittleName:item.name,
            TittleImage:item.src,
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
