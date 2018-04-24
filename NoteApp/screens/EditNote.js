import React, { Component } from 'react';
import { View, Text} from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

export class EditNote extends Component {
    render() {
      return (
        <View>
          <Text>This is create EditNote page</Text>
          <Button onPress={() => this.props.navigation.navigate('GalleryScreen')} title="Edit Photo or Note"/>
          <Button title="Home"/>
        </View>
      )
    }
  }
  
  export default EditNote;