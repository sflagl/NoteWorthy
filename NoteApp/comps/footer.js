import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Content, Footer, FooterTab, Button, Text } from 'native-base';
// import { render } from 'react-dom';
// import Ionicon from 'react-ionicons';

import Icon from 'react-native-ionicons';

export class FooterComp extends Component {
  render() {
    return (

        <Footer>
          <FooterTab>
            <Button> 
            <Icon name="images" />
              <Text>Gallery</Text>
            </Button>
            {/* <Button>
            <Icon name='camera' />
              <Text>Camera</Text>
            </Button> */}
            <Button>
              <Icon name="create" />
              <Text>Add Note</Text>
            </Button>
          </FooterTab>
        </Footer>

    );
  }
}
  export default FooterComp;