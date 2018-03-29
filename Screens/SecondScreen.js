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
  ScrollView,
  Dimensions,
  TextInput,
  Button,
  Image,
  Alert
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Swiper from 'react-native-swiper';
import StarRating from 'react-native-star-rating';


export default class SecondScreen extends Component {
  static navigationOptions ={
      title:'SecondScreen'
  };
  constructor(props){
    super(props);
    this.state={
  starCount:3.5
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  render() {
    return (
      <View style={styles.wrapper} >
      <View style={styles.swipwrapper}>
      <Swiper showsButtons={true} autoplay={true}>
        <View style={styles.slide1}>
        <Image
       style={styles.stretch}
       source={require('../images/pan_01.png')}
     />
          </View>
          <View style={styles.slide2}>
          <Image
         style={styles.stretch}
         source={require('../images/pan_01.png')}
       />
          </View>
          <View style={styles.slide3}>
          <Image
         style={styles.stretch}
         source={require('../images/pan_01.png')}
       />
          </View>
      </Swiper>
          </View>
      <View style={styles.detail}>
      <StarRating
       fullStar={require('../images/full_star.png')}
       emptyStar={require('../images/empty_star.png')}
       halfStar={require('../images/star-half-empty.png')}
       disabled={false}
       maxStars={5}
       rating={this.state.starCount}
       selectedStar={(rating) => this.onStarRatingPress(rating)}
     />
     <Text style={styles.textDeatil}>
    Tip
     </Text>
      <Text style={styles.textDeatil}>
      All the useful tips and tricks have been gathered here -
      there is a bunch of them, which makes this section a must-read
      </Text>
      </View>
      <Button
    onPress={() => {
      Alert.alert('Success!');
    }}
    title="Buy Now"
  />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  swipwrapper: {
    height: (Dimensions.get('window').width/2)-2,
  },
  detail: {
    margin: 10,
  },
  textDeatil:{
     marginTop: 20,
     color: '#000',
     fontSize: 24,
  },
  slide1: {
    height: (Dimensions.get('window').width/2)-2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    height: (Dimensions.get('window').width/2)-2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
  height: (Dimensions.get('window').width/2)-2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
})
