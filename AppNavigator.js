import React from 'react';
import {
    Button,
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import { useHeaderHeight } from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';
//import { NavigationContainer } from '@react-navigation/native';
import ListScreen from './Screens/ListScreen';
import Result from './Screens/Result'
import DetailScreen from './Screens/DetailScreen';
// import Exercise from './Screens/Exercise.js'
import DScreen from './Screens/DScreen.js';
import Guide from './Screens/Guide.js';
const AppNavigator = createStackNavigator();


function RenderScreen(){

        return(
         <AppNavigator.Navigator initialRouteName="Screens/ListScreen.js" screenOptions={{
             headerStyle:{
                 backgroundColor:'#00fce7'
             },
             headerTintColor:'#fff',
             headerTitleStyle:{
                 fontWeight:'bold',
             },
            headerTitleAlign:'center'
         }}>
            <AppNavigator.Screen 
            name="HOME WORKOUT" 
            component= {ListScreen}/>


            <AppNavigator.Screen 

            name="DetailScreen" 
            component= {DetailScreen}/>
            
            <AppNavigator.Screen 

            

            name="DScreen" 
            component= {DScreen}
            options={
                ({ route }) => ({ title: route.params.TittleName,
                   
                    headerStyle:{
                        backgroundColor:'#00fce7',
                        
                    },
                   
                      headerTitleStyle: { flex: 1, textAlign: 'center' },
                    headerTintColor:'#fff',
                    headerTitleStyle:{
                        fontWeight:'bold',
                    },
                   headerTitleAlign:'center',
                   
                })
            }
            />       
         <AppNavigator.Screen
        name="Result"
        component={Result}
        />
        <AppNavigator.Screen 

        name= "Guide" 
        component= {Guide}/>
            
            
         </AppNavigator.Navigator>

       
        )

};

export default RenderScreen;