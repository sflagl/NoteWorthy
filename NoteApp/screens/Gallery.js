import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Content} from 'native-base';

import HeaderComp from '../comps/header.js';
import FooterComp from '../comps/footer.js';
import GalleryCard from '../comps/card.js';


export class Gallery extends Component {


    render() {
      return (
     
        <Grid>
        <HeaderComp />
     
          <Row>
            <GalleryCard />   
          </Row>
          <Row>
            <GalleryCard />   
          </Row>

       <FooterComp/>   
      </Grid>
     
        // <View>         
        //   <Card
        //       image={require('../images/bear.jpg')}>
        //       <Button
        //       icon={
        //           <Icon name= 'arrow-bold-right'/>
        //       }
        //       backgroundColor='#03A9F4'
        //       buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
        //       title='Gallery #1' onPress={() => this.props.navigation.navigate('GalleryOpenScreen')}/>
        //   </Card>

        //   <Card
        //       image={require('../images/bear.jpg')}>
        //       <Button
        //       icon={
        //           <Icon name= 'arrow-bold-right'/>
        //       }
        //       backgroundColor='#03A9F4'
        //       buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
        //       title='Gallery #1' onPress={() => this.props.navigation.navigate('GalleryOpenScreen')}/>
        //   </Card>
        
        //   <Button onPress={() => this.props.navigation.navigate('OptionScreen')} title="Home"/>

        // </View>
      )
    }
  }
  
  export default Gallery;