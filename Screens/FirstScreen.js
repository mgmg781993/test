/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  ScrollView,
  TextInput,
  TouchableOpacity
} from 'react-native';
import ImageElement from './ImageElement';
import { StackNavigator } from 'react-navigation';


export default class FirstScreen extends Component {
static navigationOptions ={
    title:'Toy Land'
};
state ={
    images: [
      { id:"1", title:'shutter', img: require('../images/G20101.jpg') },
      { id:"2", title:'whooper' , img: require('../images/Whooper.jpg') },
      { id:"3", title:'pan' , img: require('../images/pan.jpg') },
      { id:"4", title:'shutter' , img: require('../images/G20101.jpg') },
      { id:"5", title:'whooper' , img: require('../images/Whooper.jpg') },
      { id:"6", title:'pan' , img: require('../images/pan.jpg') }
    ],
    imagesReference:[],
    text:'',
 }

 componentDidMount(){
   this.setState({imagesReference:this.state.images});
   //console.log(val.img);
 }
 search(text){
    this.setState({text: text});
    let imgArr =this.state.images;

    for (var i = 0; i < imgArr.length; i++){
      if (text === imgArr[i].title){
        this.setState({images: [imgArr[i]]})
      }

    }
    if(!text){
      this.setState({images: this.state.imagesReference})
    }

  }
  render() {
    const {navigate} = this.props.navigation;
    let images =this.state.images.map((val, key)=>{
      return(
       <TouchableOpacity onPress={()=>this.props.navigation.navigate("Second")} key ={key} style={styles.imgwarp}>
          <ImageElement imgsource={val.img} />
      </TouchableOpacity>

  )  });
    return (
    <ScrollView style={styles.conatiner}>
      <TextInput
      placeholder='Search'
      onChangeText={(text) => this.search(text)}
      value={this.state.text}
      style={styles.textinput} />
       <View style={styles.photogrid}>
          {images}
       </View>

    </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff"
   },
   textinput: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#fff"
   },
   photogrid:{
     flex: 1,
     padding: 2,
     flexDirection: 'row',
     flexWrap: 'wrap',
  },
  imgwarp: {
    padding: 2,
    width: (Dimensions.get('window').width/2)-2,
    height: 170,
   },
});
