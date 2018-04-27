import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

export class HeaderComp extends Component {
    render() {
      return (
        <Container>
        <Header>
          <Left>
              <Icon name='camera' />
          </Left>
          <Body>
            <Title>NoteWorthy</Title>
          </Body>
          <Right>
              <Icon name='lock' />
          </Right>
        </Header>
      </Container>
      )
    }
  }
  
  export default HeaderComp;


