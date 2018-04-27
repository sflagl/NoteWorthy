import React, { Component } from 'react';
import { Div, View, Text, StyleSheet} from 'react-native';

import { Col, Row, Grid } from "react-native-easy-grid";
import { Container} from 'native-base';

import HeaderComp from '../comps/header.js';
import FooterComp from '../comps/footer.js';

export class Home extends Component {
  render() {
    return (
      // <View>
      //   <Text>Note Worthy</Text>
      //   <Button
      //    onPress={() => this.props.navigation.navigate('LoginScreen')} title="Login"/>
      //   <Button style={styles.buttonSolid}
      //    onPress={() => this.props.navigation.navigate('CreateAccountScreen')} title="Create Account"/>
      // </View>
        <Grid>
          <HeaderComp />
            <Row>
              <Col>

              </Col>     
            </Row>
            <Row>
              <Col>
                <Text>Home</Text>    
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
      

    
    )
  }
}




export default Home;