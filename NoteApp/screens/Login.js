import React, { Component } from 'react';
import { View, Text, Button} from 'react-native';
import ButtonOutline from '../comps/button-outline';
// import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

export class Login extends Component {
  render() {
    return (

  
        <ButtonOutline onPress={() => this.props.navigation.navigate('OptionScreen')} title="Submit"/>

    )
  }
};

export default Login;