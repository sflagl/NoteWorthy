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

export class StartView extends Component {
  render() {
    return (
      <Container style={{margin: 5}}>


        

        
      <Grid>
      <HeaderComp />
   
        <Row size={3} style={{backgroundColor:'grey', padding:5}}>
          <Cam style={{justifyContent: 'center',
        alignItems: 'center'}}/>
        </Row>

        <Row size={1}>
        <Col>

              <ButtonSolid/>    
            </Col>
        </Row>


        <FooterComp/>
    </Grid>
     </Container>
    )
  }
}

export default StartView;