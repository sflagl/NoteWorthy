import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container} from 'native-base';

import HeaderComp from '../comps/header.js';
import FooterComp from '../comps/footer.js';

export class StartView extends Component {
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
            <Text>Camera</Text>    
          </Col>

        </Row>
        <Row>
          <Col>
            {/* <Button
            onPress={() => this.props.navigation.navigate('LoginScreen')} title="Login"/> */}
          </Col>
          <Col>
            {/* <Button
            onPress={() => this.props.navigation.navigate('CreateAccountScreen')} title="Create Account"/> */}
          </Col>


        </Row>
        <FooterComp/>
    </Grid>
      // <View>
      //   <Text>This is StartView page</Text>
      //   <Button onPress={() => this.props.navigation.navigate('OptionScreen')} title="Exit View"/>
      // </View>
    )
  }
}

export default StartView;