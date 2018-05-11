import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
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
          
          <Row size={1} style={{ padding: 10 }}>
          
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis maximus dui, in pulvinar lectus ultricies sagittis. Curabitur suscipit sapien magna, et vehicula ligula vestibulum id. Suspendisse augue sapien, venenatis in ullamcorper quis, vehicula quis turpis. Pellentesque ac tincidunt erat, aliquet dignissim purus. Duis condimentum cursus porta. Phasellus hendrerit dolor ut dignissim rhoncus. Nullam ultrices semper odio et laoreet. Morbi consequat massa nisl, ac dignissim ante consectetur at. Mauris quis ex interdum, varius massa eu, consequat urna. Sed ut efficitur ex. Ut lacinia egestas viverra.</Text>
          </Row>

          <Row size={2}>
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


