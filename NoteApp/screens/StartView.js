import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Header, Left, Body, Right, Button, Title, List, ListItem } from 'native-base';
import ButtonOutline from '../comps/button-outline';

import Icon from 'react-native-ionicons';
import { HeaderComp } from '../comps/header';
import { FooterComp } from '../comps/footer';

import GalleryCard from '../comps/card.js';

import Thumb from '../comps/thumbnail';
import Cam from '../comps/camera';

import ButtonSolid from '../comps/button';

import { TabNavigator, navigationOptions } from 'react-navigation'; // Version can be specified in package.json

class StartView extends Component {

  static navigationOptions = ({ navigation }) => {

    return {
      header: <HeaderComp press1={() => navigation.navigate('StartViewScreen')} press2={() => navigation.navigate('HomeScreen')} />
    }
  };

  render() {
    return (
      <Grid>


        <Row>
          StartView
      </Row>


      </Grid>
    );
  }
}



class GalleryTest extends Component {

  static navigationOptions = ({ navigation }) => {

    return {
      header: <HeaderComp press1={() => navigation.navigate('StartViewScreen')} press2={() => navigation.navigate('HomeScreen')} />
    }
  };

  render() {
    return (
      <ScrollView>
        <Grid>


          <Row>
            <GalleryCard press={() => this.props.navigation.navigate('GalleryOpenScreen')} />
          </Row>
          <Row>
            <GalleryCard press={() => this.props.navigation.navigate('GalleryOpenScreen')} />
          </Row>
          <Row>
            <GalleryCard press={() => this.props.navigation.navigate('GalleryOpenScreen')} />
          </Row>

        </Grid>
      </ScrollView>
    );
  }
}

class AddNote extends Component {


  static navigationOptions = ({ navigation }) => {

    return {
      header: <HeaderComp press1={() => navigation.navigate('StartViewScreen')} press2={() => navigation.navigate('LoginScreen')} />
    }
  };

  render() {
    return (
      <Container style={{ margin: 5 }}>

        <Grid>
        <Row size={1} style={{ padding: 10 }}>

        <Text style={{ fontSize: 30, fontWeight:'100',}}>How to Create a Note:</Text>

        </Row>
          
          <Row size={1}>

            <List>

              <ListItem>
                <Text style={{ fontWeight: '100', fontSize: 16, }}>1. Take at least 6 (left, right, sides, top, bottom) pictures of the item you want to make a note of. </Text>
              </ListItem>
              <ListItem>
                <Text style={{ fontWeight: '100', fontSize: 20, }}>2. Nathaniel Clyne</Text>
              </ListItem>
              <ListItem>
                <Text style={{ fontWeight: '100', fontSize: 20, }}>3. Dejan Lovren</Text>
              </ListItem>
            </List>
          </Row>
          
          

         

          <Row size={1}>
            <Col>
              <ButtonOutline title="Add Note" press={() => this.props.navigation.navigate('EditNoteScreen')} />
              <ButtonSolid  title="Take Picture" press={() => this.props.navigation.navigate('StartViewScreen')}/>
            </Col>
          </Row>



        </Grid>
      </Container>
    );
  }
}

export default TabNavigator({
  GalleryTest: {
    screen: GalleryTest,
    navigationOptions: {
      tabBarLabel: (<Text style={{ fontSize: 10, paddingBottom: 5 }}>Gallery</Text>),
      tabBarIcon: (<Icon name='images' size={25} />),
    },
  },
  StartView: {
    screen: StartView,
    navigationOptions: {
      tabBarLabel: (<Text style={{ fontSize: 10, paddingBottom: 5 }}>Start View</Text>),
      tabBarIcon: (<Icon name='camera' size={25} />),
    }
  },
  AddNote: {
    screen: AddNote,
    navigationOptions: {
      tabBarLabel: (<Text style={{ fontSize: 10, paddingBottom: 5 }}>Add Note</Text>),
      tabBarIcon: (<Icon name='create' size={25} />),
    }
  },
});


