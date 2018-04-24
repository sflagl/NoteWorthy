import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';

export class GalleryOpen extends Component {

    _renderItem ({item, index}) {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>{ item.title }</Text>
            </View>
        );
    }

    render () {
        return (
            // <Carousel
            // //   ref={(c) => { this._carousel = c; }}
            // //   data={this.state.entries}
            // //   renderItem={this._renderItem}
            // //   sliderWidth={sliderWidth}
            // //   itemWidth={itemWidth}
            // />
            <Text>This is create GalleryOpen page</Text>
        );
    }
}
  
  export default GalleryOpen;