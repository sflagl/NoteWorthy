import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

export class HeaderComp extends Component {
    render() {
      return (
   
        <Header>
          <Left>
            <Button transparent  onPress={() => this.props.navigation.navigate('StartView')}>
              <Icon name='camera' />
            </Button>
          </Left>
          <Body>
            <Title>NoteWorthy</Title>
          </Body>
          <Right>
              <Icon name='lock' />
          </Right>
        </Header>
 
      )
    }
  }
  
  export default HeaderComp;


