import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
// import { Card, ListItem, Button, Icon } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import ButtonOutline from '../comps/button-outline';
import ButtonSolid from '../comps/button';
import { Col, Row, Grid } from "react-native-easy-grid";
import { HeaderComp } from '../comps/header';


const { height, width } = Dimensions.get('window');

// const images = [
//     '../images/bear.jpg',
//     'https://unsplash.it/350/?random',
//     'https://unsplash.it/400/?random',
//     'https://unsplash.it/450/?random',
//     'https://unsplash.it/500/?random',
//     'https://unsplash.it/550/?random',
//     'https://unsplash.it/600/?random'
// ];



export class GalleryOpen extends Component {
    constructor(props){
        super(props);
        this.state={
            entries: [
                {
                    title: 'First',
                    source:"https://images.unsplash.com/photo-1516073762189-e915e8248a2d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0c88660471b22d3c3b70faef2d57189d&auto=format&fit=crop&w=700&q=60"
                },
                {
                    title: 'Second',
                    source:"https://images.unsplash.com/photo-1516073762189-e915e8248a2d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0c88660471b22d3c3b70faef2d57189d&auto=format&fit=crop&w=700&q=60"
                },
                {
                    title: 'Third',
                    source:"https://images.unsplash.com/photo-1516073762189-e915e8248a2d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0c88660471b22d3c3b70faef2d57189d&auto=format&fit=crop&w=700&q=60"
                }
            ]
        }
    }

    static navigationOptions =  ({ navigation }) => {
   
        return {
          header: <HeaderComp press1={() => navigation.navigate('StartViewScreen')} press2={() => navigation.navigate('HomeScreen')}/>  
      }
    };

    
    _renderItem = ({ item, index }) => {
        return (
            <View>
               
                <Image style={{height:300, width:'100%'}} source={{uri:item.source}}/>
                <Text>{item.title}</Text>
            </View>
        );
    }
   

    render () {

        return (
            
            <Grid>
                          
                <Row size={2}>
                <View>
                <View style={{
                    transform: [{
                        rotate: '0deg'
                    }]
                }}>
                    <Carousel
                    //   inactiveSlideOpacity={0.6}
                    //   inactiveSlideScale={0.65}
                    //   firstItem={1}
                      sliderWidth={width}
                      itemWidth={width/1.5}
                      data={this.state.entries}
                      renderItem={this._renderItem}
                      containerCustomStyle={{ overflow: 'visible' }}
                      contentContainerCustomStyle={{ overflow: 'visible' }}
                    />
                </View>
            </View>
                </Row>
                <Row size={1}>
                    
        

            </Row> 
            <Row size={1}>
                <Col>
                    <ButtonOutline press={() => this.props.navigation.navigate('EditNoteScreen')} title="Submit"/>  
                    <ButtonSolid press={() => this.props.navigation.navigate('StartViewScreen')}  title="Home"/>  
                    </Col>
     
        </Row>     
            </Grid>
        );
    }
}
  
  export default GalleryOpen;