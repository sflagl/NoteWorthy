import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

export class StartView extends Component {
  render() {
    return (
      <View>
        <Text>This is StartView page</Text>
        <Button onPress={() => this.props.navigation.navigate('OptionScreen')} title="Exit View"/>
      </View>
    )
  }
}

export default StartView;