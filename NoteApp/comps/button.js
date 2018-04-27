import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';

export class ButtonSolid extends Component {
  render() {
    return (

       

          <Button style={{ margin: 10 }} block rounded success>
            <Text>B</Text>
          </Button>

    
    );
  }
}


export default ButtonSolid;