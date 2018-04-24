import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

export class Home extends Component {
  render() {
    return (
      <View>
        <Text>Note Worthy</Text>
        <Button
         onPress={() => this.props.navigation.navigate('LoginScreen')} title="Login"/>
        <Button style={styles.buttonSolid}
         onPress={() => this.props.navigation.navigate('CreateAccountScreen')} title="Create Account"/>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  buttonSolid: {

  },

})

export default Home;