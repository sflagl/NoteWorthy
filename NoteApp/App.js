import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { NativeRouter, Route, Link } from 'react-router-native'

import { StackNavigator, NavigationActions, navigationOptions, TabNavigator } from 'react-navigation';

import Home from './screens/Home';
import CreateAccount from './screens/CreateAccount';
import Option from './screens/Option';
import AddNote from './screens/AddNote';
import EditNote from './screens/EditNote';
import StartView from './screens/StartView';

import GalleryOpen from './screens/GalleryOpen';
import HeaderComp from './comps/header'
import Icon from 'react-native-ionicons';


const AppNavigator = StackNavigator({
  
  HomeScreen: { screen: Home,},
  CreateAccountScreen: {screen: CreateAccount},
  StartViewScreen: {screen: StartView},
  OptionScreen: {screen: Option},
  AddNoteScreen: { screen: AddNote },
  EditNoteScreen: { screen: EditNote },
  GalleryOpenScreen: {screen: GalleryOpen}

});


export default class App extends Component {
  
  render() {
    return (
      <AppNavigator />
    );
  }
}

