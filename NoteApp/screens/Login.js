import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import ButtonOutline from '../comps/button-outline';

import Icon from 'react-native-ionicons';
import { HeaderComp } from '../comps/header';
import { FooterComp } from '../comps/footer';





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

class Gallery extends Component {

    static navigationOptions =  ({ navigation }) => {
     
      return {
        header: <HeaderComp press1={() => navigation.navigate('StartViewScreen')} press2={() => navigation.navigate('LoginScreen')}/>  
    }
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
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
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button onPress={() => this.props.something('AddNoteScreen')}>
          <Icon name="create" />
          <Text>Add Note</Text>
        </Button>
      </View>
    );
  }
}

export default TabNavigator({
  Gallery: { 
    screen: Gallery,
    navigationOptions: {
      tabBarLabel: (<Text style={{fontSize: 10, paddingBottom:5 }}>Gallery</Text>),
      tabBarIcon: (<Icon name='images' size={25} />),
    }, 
   },
  AddNote: { screen: AddNote,
    navigationOptions: {
      tabBarLabel: (<Text style={{fontSize: 10, paddingBottom:5 }}>Add Note</Text>),
      tabBarIcon: (<Icon name='create' size={25} />),
    }
   },
});


