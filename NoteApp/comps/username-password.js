 
import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input } from 'native-base';

export class UsernamePassword extends Component {
  render() {
    return (

       
    
        <Form>
        <Item>
          <Input placeholder="Username" />
        </Item>
        <Item>
          <Input placeholder="Password" />
        </Item>
      </Form>
    
    );
  }
}


export default UsernamePassword;





