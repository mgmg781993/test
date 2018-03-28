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
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';


export default class SecondScreen extends Component {
  static navigationOptions ={
      title:'SecondScreen'
  };
  render() {
    return (
      <Text>
      SecondScreen
      </Text>
    );
  }
}
