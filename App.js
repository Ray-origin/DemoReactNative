
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import AppNavigator from '../BMI_Apps/AppNavigator.js'
import { NavigationContainer } from '@react-navigation/native';

export default class App extends React.Component{
  render(){
    return (
      <NavigationContainer>
        <AppNavigator/>
      </NavigationContainer>
    )
  };
}


