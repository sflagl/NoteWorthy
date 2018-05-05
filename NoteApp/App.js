/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { NativeRouter, Route, Link } from 'react-router-native'

import { StackNavigator, NavigationActions, navigationOptions, TabNavigator } from 'react-navigation';
import Login from './screens/Login';
import Home from './screens/Home';
import CreateAccount from './screens/CreateAccount';
import Option from './screens/Option';
import AddNote from './screens/AddNote';
import EditNote from './screens/EditNote';
import StartView from './screens/StartView';
import Gallery from './screens/Gallery';
import GalleryOpen from './screens/GalleryOpen';
import HeaderComp from './comps/header'
import Icon from 'react-native-ionicons';


const AppNavigator = StackNavigator({
  
  HomeScreen: { 
    screen: Home,     
  },
  LoginScreen: { screen: Login, },
  
  CreateAccountScreen: {screen: CreateAccount},
  StartViewScreen: {screen: StartView},
  
  OptionScreen: {screen: Option},
  AddNoteScreen: { screen: AddNote },
  EditNoteScreen: { screen: EditNote },
  
  GalleryScreen: {screen: Gallery},
  GalleryOpenScreen: {screen: GalleryOpen}

});



// Login.navigationOptions = {
//   header: ({navigation}) => (
//     <HeaderComp press={navigation.navigate('StartViewScreen')} />
//   )
// }



export default class App extends Component {
  
  render() {
    return (
      <AppNavigator />
    );
  }
}

// export default class App extends Component {
//   render() {
//     return (
//       <Gallery />
//     );
//   }
// }