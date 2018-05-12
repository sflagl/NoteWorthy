import React, { Component } from 'react';
import { View, Text,  StyleSheet, ImageBackground} from 'react-native';

import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Form, Item, Input, Textarea, Content} from 'native-base';

import Thumb from '../comps/thumbnail';

import HeaderComp from '../comps/header.js';
import FooterComp from '../comps/footer.js';
import ButtonOutline from '../comps/button-outline';
import ButtonSolid from '../comps/button';

export class CameraView extends Component {

  static navigationOptions =  ({ navigation }) => {
     
    return {
      header: <HeaderComp press1={() => navigation.navigate('StartViewScreen')} press2={() => navigation.navigate('LoginScreen')}/>  
    }
  };

    render() {
      return (
        <Grid>


            <Row size={1} style={{ backgroundColor: 'rgba(255, 255, 255, .9)', marginTop: 30, marginBottom: 30, marginLeft: 10, marginRight: 10, height: 440, borderRadius: 10 }}>

                <Text>Camera View</Text>



            </Row>

            <Row size={1}>
            <Col>
            <ButtonSolid press={() => this.props.navigation.navigate('StartViewScreen')} title="Exit View" />
            </Col>
            </Row>

        </Grid>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: undefined,
      height: undefined,
      backgroundColor:'transparent',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  
  
  export default CameraView;