import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
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





// export class Login extends Component {

//   // constructor(props){
//   //   super(props)
//   //   this.state = {
//   //     navigator: this.navigation
//   //   }
  
//   // }
  


//   static navigationOptions =  ({ navigation }) => {
     
//       return {
//         header: <HeaderComp press1={() => navigation.navigate('StartViewScreen')} press2={() => navigation.navigate('LoginScreen')}/>  
//     }
  
   
//   };
 
//   render() {

  

//     return (

//       <Grid>
   
   
//         <Row>
          
//         </Row>
//         <Row>
//           <Text>Login</Text>
         
//         </Row>

//      <FooterComp />   
//     </Grid>
//     )
//   }
// };

// export default Login;

import { TabNavigator, navigationOptions } from 'react-navigation'; // Version can be specified in package.json

class StartView extends Component {

  static navigationOptions =  ({ navigation }) => {
   
    return {
      header: <HeaderComp press1={() => navigation.navigate('StartViewScreen')} press2={() => navigation.navigate('HomeScreen')}/>  
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

    static navigationOptions =  ({ navigation }) => {
     
      return {
        header: <HeaderComp press1={() => navigation.navigate('StartViewScreen')} press2={() => navigation.navigate('HomeScreen')}/>  
    }
  };

  render() {
    return (
      <Grid>
        
     
        <Row>
          <GalleryCard />   
        </Row>
        <Row>
          <GalleryCard />   
        </Row>
  
    </Grid>
    );
  }
}

class AddNote extends Component {


  static navigationOptions =  ({ navigation }) => {
     
    return {
      header: <HeaderComp press1={() => navigation.navigate('StartViewScreen')} press2={() => navigation.navigate('LoginScreen')}/>  
    }
  };

  render() {
    return (
      <Container style={{margin: 5}}>


        

        
      <Grid>
      
   
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
              <ButtonOutline/>  
              <ButtonSolid/>    
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
      tabBarLabel: (<Text style={{fontSize: 10, paddingBottom:5 }}>Gallery</Text>),
      tabBarIcon: (<Icon name='images' size={25} />),
    }, 
   },
   StartView: { screen: StartView,
    navigationOptions: {
      tabBarLabel: (<Text style={{fontSize: 10, paddingBottom:5 }}>Start View</Text>),
      tabBarIcon: (<Icon name='camera' size={25} />),
    }
   },
   AddNote: { screen: AddNote,
    navigationOptions: {
      tabBarLabel: (<Text style={{fontSize: 10, paddingBottom:5 }}>Add Note</Text>),
      tabBarIcon: (<Icon name='create' size={25} />),
    }
   },
});


