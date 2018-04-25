import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Card, ListItem, Button, Icon, Avatar } from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";

export class Home extends Component {
  render() {
    return (
      // <View>
      //   <Text>Note Worthy</Text>
      //   <Button
      //    onPress={() => this.props.navigation.navigate('LoginScreen')} title="Login"/>
      //   <Button style={styles.buttonSolid}
      //    onPress={() => this.props.navigation.navigate('CreateAccountScreen')} title="Create Account"/>
      // </View>
      <Grid>
      <Row>
        <Col>
          <Avatar
              xlarge
              rounded
              source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
              onPress={() => console.log("Works!")}
              activeOpacity={0.7}
            />
        </Col>

               
      </Row>
      <Row>
        <Col>
          <Text>Note Worthy</Text>    
        </Col>

      </Row>
      <Row>
        <Col>
          <Button
          onPress={() => this.props.navigation.navigate('LoginScreen')} title="Login"/>
        </Col>
        <Col>
          <Button style={styles.buttonSolid}
          onPress={() => this.props.navigation.navigate('CreateAccountScreen')} title="Create Account"/>
        </Col>


      </Row>
  </Grid>
    )
  }
}



const styles = StyleSheet.create({
  buttonSolid: {

  },

})

export default Home;