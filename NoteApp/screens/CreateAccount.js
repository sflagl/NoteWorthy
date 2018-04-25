import React, { Component } from 'react';
import { View, Text,} from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';


export class CreateAccount extends Component {
  render() {
    return (
      <View>
        <FormLabel>First Name</FormLabel>
        <FormInput/>
        <FormLabel>Last Name</FormLabel>
        <FormInput/>
        <FormLabel>Email</FormLabel>
        <FormInput/>
        <FormLabel>Password</FormLabel>
        <FormInput/>
        {/* <FormValidationMessage>Error message</FormValidationMessage> */}
        
        <Button onPress={() => this.props.navigation.navigate('OptionScreen')} title="Submit"/>
      </View>
    )
  }
}

export default CreateAccount;