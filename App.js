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
import FirstScreen from './Screens/FirstScreen';
import SecondScreen from './Screens/SecondScreen'

const Navigation = StackNavigator ({
  First: { screen: FirstScreen },
  Second: { screen: SecondScreen }
});

export default Navigation
