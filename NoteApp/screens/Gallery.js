import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';


export class Gallery extends Component {


    render() {
      return (
        <View>         
          <Card
              image={require('../images/bear.jpg')}>
              <Button
              icon={
                  <Icon name= 'arrow-bold-right'/>
              }
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='Gallery #1' onPress={() => this.props.navigation.navigate('GalleryOpenScreen')}/>
          </Card>

          <Card
              image={require('../images/bear.jpg')}>
              <Button
              icon={
                  <Icon name= 'arrow-bold-right'/>
              }
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='Gallery #1' onPress={() => this.props.navigation.navigate('GalleryOpenScreen')}/>
          </Card>
        
          <Button onPress={() => this.props.navigation.navigate('OptionScreen')} title="Home"/>

        </View>
      )
    }
  }
  
  export default Gallery;