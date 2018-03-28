import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  Image,
} from 'react-native';


class ImageElement extends Component {
render(){
  return(
      <Image source={this.props.imgsource}/>
     );
  }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      width: null,
      alignSelf:'stretch',
      backgroundColor: "#fff"
   }

});

export default ImageElement
