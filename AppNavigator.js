import React from 'react';
import {
    Button,
    View,
    Text,
    ImageBackground,
    Image
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useHeaderHeight } from '@react-navigation/stack';

import ListScreen from './Screens/ListScreen';
import DetailScreen from './Screens/DetailScreen';
import ExerciseScreen from './Screens/ExerciseScreen';


const AppNavigator = createStackNavigator();


function RenderScreen(){
        return(
         <AppNavigator.Navigator initialRouteName="Screens/ListScreen.js" >
            <AppNavigator.Screen 
            name="HOME WORKOUT" 
            component= {ListScreen}
            options={{
                title:'Welcome',
                headerStyle:{
                    backgroundColor:'#81DAF5'
                },
                headerTintColor:'#fff',
                headerTitleStyle:{
                    fontWeight:'bold',
                },
               headerTitleAlign:'center'
            }}/>
            <AppNavigator.Screen 
        
            name="DetailScreen" 
            component= {DetailScreen}
            options={
                ({ route }) => ({ title: route.params.TittleName,
                   
                    headerStyle:{
                        backgroundColor:'#81DAF5',
                        
                    },
                    headerTintColor:'#fff',
                    headerTitleStyle:{
                        fontWeight:'bold',
                    },
                   headerTitleAlign:'center'
                })
            }
            />
            <AppNavigator.Screen
                name="ExerciseScreen"
                component= {ExerciseScreen}
            />
         </AppNavigator.Navigator>
        )

};

export default RenderScreen;