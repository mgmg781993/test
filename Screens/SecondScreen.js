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
  TextInput
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Swiper from 'react-native-swiper'


export default class SecondScreen extends Component {
  static navigationOptions ={
      title:'SecondScreen'
  };
  render() {
    return (
      <View style={styles.wrapper} >
      <View style={styles.swipwrapper}>
      <Swiper showsButtons={true} autoplay={true}>
        <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
      </Swiper>
          </View>
      <View style={styles.detail}>
      <TextInput
      placeholder='Search' />
        </View>
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
  Detail: {
    height: (Dimensions.get('window').width/2)-2,
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
