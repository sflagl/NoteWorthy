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

import { StackNavigator } from 'react-navigation';
import Login from './screens/Login';
import Home from './screens/Home';
import CreateAccount from './screens/CreateAccount';
import Option from './screens/Option';
import AddNote from './screens/AddNote';
import EditNote from './screens/EditNote';
import StartView from './screens/StartView';
import Gallery from './screens/Gallery';
import GalleryOpen from './screens/GalleryOpen';

const AppNavigator = StackNavigator({
  StartViewScreen: {screen: StartView},
  HomeScreen: { screen: Home },
  // LoginScreen: { screen: Login },
  CreateAccountScreen: {screen: CreateAccount},
  OptionScreen: {screen: Option},
  AddNoteScreen: { screen: AddNote },
  EditNoteScreen: { screen: EditNote },
  
  GalleryScreen: {screen: Gallery},
  GalleryOpenScreen: {screen: GalleryOpen}

});

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