 
import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input } from 'native-base';

export class CreateCred extends Component {
  render() {
    return (

       
    
        <Form>
        <Item>
          <Input placeholder="Full Name" />
        </Item>
        <Item>
          <Input placeholder="Email" />
        </Item>
        <Item>
          <Input placeholder="Password" />
        </Item>
        <Item>
          <Input placeholder="Confirm Password" />
        </Item>
      </Form>
    
    );
  }
}


export default CreateCred;





