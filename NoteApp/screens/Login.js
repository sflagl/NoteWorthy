import React, { Component } from 'react';
import { View, Text} from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

export class Login extends Component {
  render() {
    return (
      <View>
        <FormLabel>Email</FormLabel>
        <FormInput/>
        <FormLabel>Password</FormLabel>
        <FormInput/>
        <Button onPress={() => this.props.navigation.navigate('OptionScreen')} title="Submit"/>
      </View>
    )
  }
};

export default Login;