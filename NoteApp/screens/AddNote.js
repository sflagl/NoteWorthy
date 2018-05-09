import React, { Component } from 'react';
import { View, Text} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Button, Content} from 'native-base';

import HeaderComp from '../comps/header.js';
import FooterComp from '../comps/footer.js';
import Thumb from '../comps/thumbnail';
import Cam from '../comps/camera';
import ButtonOutline from '../comps/button-outline';
import ButtonSolid from '../comps/button';


import { StackNavigator, NavigationActions, navigationOptions } from 'react-navigation';

export class AddNote extends Component {

  render() {
    return (
      <Container style={{margin: 5}}>
        
      <Grid>
      <HeaderComp />
   
        <Row size={1} style={{backgroundColor:'grey', padding:5}}>
          <Cam style={{justifyContent: 'center',
        alignItems: 'center'}}/>
        </Row>
        <Row size={1} style={{ padding:5, margin: 5, justifyContent: 'center',
        alignItems: 'center'}}>
          <Col>
            <Thumb/>
          </Col>   
          <Col>
            <Thumb/>
          </Col>   
          <Col>
            <Thumb/>
          </Col>   
          <Col>
            <Thumb/>
          </Col>   
        </Row>
        <Row size={1}>
        <Col>

               <ButtonOutline press={() => this.props.navigation.navigate('StartViewScreen')} title="Add Note"/>   
              <ButtonSolid title="Take Picture"/>    
            </Col>
        </Row>


        <FooterComp/>
    </Grid>
     </Container>
    )
  }
}

export default AddNote;