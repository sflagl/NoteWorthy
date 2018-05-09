import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Header, Left, Body, Right, Button, Title, Content } from 'native-base';
import ButtonOutline from '../comps/button-outline';

import CreateCred from '../comps/create-account-cred';

import Icon from 'react-native-ionicons';


export class CreateAccount extends Component {
  static navigationOptions = {
    header: null
  };

  render() {

    return (
      
      <Container>
  
      <Content>
        <Grid>
          <Row size={2}>
            <Col style={{ padding: 10 }}>
              <CreateCred/>
            </Col>
  
          </Row>
          <Row size={1}>
            <Col style={{ padding: 10 }}>
              
              <ButtonOutline press={() => this.props.navigation.navigate('StartViewScreen')} title="Submit"/>   
            </Col>
          </Row>

        </Grid>
        </Content>
    </Container>
  
  
    
    )
  }
}

export default CreateAccount;

