import React, { Component } from 'react';
import { View, Text} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Button, Content} from 'native-base';

import HeaderComp from '../comps/header.js';
import FooterComp from '../comps/footer.js';

export class AddNote extends Component {
  render() {
    return (
      <Grid>
      <HeaderComp />
        <Row>
          <Col>

          </Col>     
        </Row>
        <Row>
          <Col>
            <Text>Add Note</Text>    
          </Col>

        </Row>
        <Content>
          <Button block success>
            <Text>Light</Text>
          </Button>
        </Content>
        <Row>
          <Col>
          
            {/* <Button
            onPress={() => this.props.navigation.navigate('LoginScreen')} title="Login"/> */}
          </Col>
          <Col>
            <Button
            onPress={() => this.props.navigation.navigate('CreateAccountScreen')} title="Create Account"/>
          </Col>


        </Row>
        <FooterComp/>
    </Grid>
      // <View>
      //   <Text>This is create AddNote page</Text>
      //   <Button onPress={() => this.props.navigation.navigate('GalleryScreen')} title="Submit"/>
      //   <Button title="Take Picture"/>
      // </View>
    )
  }
}

export default AddNote;