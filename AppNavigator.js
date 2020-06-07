import React from 'react';
import {
    Button,
    View,
    Text
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
//import { NavigationContainer } from '@react-navigation/native';
import ListScreen from './Screens/ListScreen';
import DetailScreen from './Screens/DetailScreen';

const AppNavigator = createStackNavigator();


function RenderScreen(){

        return(
         <AppNavigator.Navigator initialRouteName="Screens/ListScreen.js" screenOptions={{
             headerStyle:{
                 backgroundColor:'#81DAF5'
             },
             headerTintColor:'#fff',
             headerTitleStyle:{
                 fontWeight:'bold',
             },
            headerTitleAlign:'center'
         }}>
            <AppNavigator.Screen 
            name="Home" 
            component= {ListScreen}/>
            <AppNavigator.Screen 

            name="DetailScreen" 
            component= {DetailScreen}/>
         </AppNavigator.Navigator>
        )

};

export default RenderScreen;