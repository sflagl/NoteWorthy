import React, { Component } from 'react';
import { View, Text} from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

export class AddNote extends Component {
  render() {
    return (
      <View>
        <Text>This is create AddNote page</Text>
        <Button onPress={() => this.props.navigation.navigate('GalleryScreen')} title="Submit"/>
        <Button title="Take Picture"/>
      </View>
    )
  }
}

export default AddNote;