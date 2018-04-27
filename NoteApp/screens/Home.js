import React, { Component } from 'react';
import { Div, View, Text, StyleSheet} from 'react-native';

import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Content} from 'native-base';

import ButtonOutline from '../comps/button-outline';
import ButtonSolid from '../comps/button';
import UsernamePassword from '../comps/username-password';
import Icon from 'react-native-ionicons';

export class Home extends Component {
  render() {
    return (
      <Container>
  
      <Content>
        <Grid>
          <Row size={1}>
            <Col>
            <Icon name='camera'  style={{ textAlign: 'center', fontSize: 100, color: 'grey', marginTop: 70 }}/>
            </Col>
          </Row>
          <Row size={2}>
            <Col style={{ padding: 10 }}>
            <UsernamePassword/>
            </Col>
          </Row>
          <Row size={1}>
            <Col style={{ padding: 10 }}>
              <ButtonOutline/>  
              <ButtonSolid/>    
            </Col>
          </Row>

        </Grid>
      </Content>
    </Container>
    //   <Container>
    //   <Content>
    //   <Grid>
    //     <Row >
    //       <Icon name='camera' />
    //     </Row>
    //     <Row>
   
    //         <ButtonOutline/>        
    //     </Row>
    //     <Row>
   
    //     <ButtonSolid/>        
    //   </Row>
    //     <Row>
    //       <Col>
    //         <Text>Home</Text>    
    //       </Col>

    //     </Row>
    //     <Row>
    //       <Col>
    //         {/* <Button
    //         onPress={() => this.props.navigation.navigate('LoginScreen')} title="Login"/> */}
    //       </Col>
    //       <Col>
    //         {/* <Button
    //         onPress={() => this.props.navigation.navigate('CreateAccountScreen')} title="Create Account"/> */}
    //       </Col>


    //     </Row>
     
    // </Grid>
    // </Content>
    // </Container>
      

    
    )
  }
}



export default Home;