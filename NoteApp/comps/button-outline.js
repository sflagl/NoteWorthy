import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';

export class ButtonOutline extends Component {
  render() {
    return (

       
    
          <Button style={{ margin: 10 }} block bordered rounded success>
            <Text>B</Text>
          </Button>
   
    
    );
  }
}


export default ButtonOutline;