import React, { Component } from 'react';
import { View, Text,  StyleSheet, ImageBackground} from 'react-native';

import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Form, Item, Input, Textarea, Content} from 'native-base';

import Thumb from '../comps/thumbnail';

import HeaderComp from '../comps/header.js';
import FooterComp from '../comps/footer.js';
import ButtonOutline from '../comps/button-outline';
import ButtonSolid from '../comps/button';

export class EditNote extends Component {

  static navigationOptions =  ({ navigation }) => {
     
    return {
      header: <HeaderComp press1={() => navigation.navigate('StartViewScreen')} press2={() => navigation.navigate('LoginScreen')}/>  
    }
  };

    render() {
      return (
        <Grid>
          <ImageBackground
            source={{ uri: 'https://images.unsplash.com/photo-1513909619904-efd11e5b8666?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c5c80f82f52136a57d191b2e081eb82c&auto=format&fit=crop&w=668&q=80' }}
            style={styles.container}>

            <Row style={{ backgroundColor: 'rgba(255, 255, 255, .9)', marginTop: 30, marginBottom: 30, marginLeft: 10, marginRight: 10, height: 440, borderRadius: 10 }}>

              <Col>

                <Row>
                  <Text style={{ fontSize: 40, padding: 10, fontWeight: '100', flex: 1, justifyContent: "center", alignItems: "center", paddingLeft: 20 }}>Add Note</Text>
                </Row>
                <Row size={3}>

                  <Content padder>
                    <Form>
                      <Item rounded style={{ paddingLeft: 5, marginBottom: 10, paddingLeft: 10, backgroundColor: 'rgba(211, 211, 211, .4)' }}>
                        <Input placeholder="Gallery Title" />
                      </Item>

                      <Item rounded style={{ paddingLeft: 10, paddingTop: 10, marginTop: 10, marginBottom: 10, backgroundColor: 'rgba(211, 211, 211, .4)' }}>

                        <Textarea placeholder="Notes:" style={{ fontSize: 17 }} rowSpan={4} />
                      </Item>
                    </Form>
                  </Content>

                </Row>
                <Row size={1} style={{
                  padding: 5, margin: 5, justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <Col>
                    <Thumb />
                  </Col>
                  <Col>
                    <Thumb />
                  </Col>
                  <Col>
                    <Thumb />
                  </Col>
                  <Col>
                    <Thumb />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <ButtonSolid press={() => this.props.navigation.navigate('StartViewScreen')} title="Submit" />
                  </Col>



                </Row>

              </Col>



            </Row>
          </ImageBackground>
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
  
  
  export default EditNote;