import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Content, Footer, FooterTab, Button, Text, Icon } from 'native-base';



export class FooterComp extends Component {
  render() {
    return (
      <Container>
        <Content />
        <Footer>
          <FooterTab>
            <Button>
          
              <Text>Gallery</Text>
            </Button>
            <Button>
            <Icon name='camera' />
              <Text>Camera</Text>
            </Button>
            <Button active>
              <Text>Add Note</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
  export default FooterComp;