import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createSwitchNavigator } from 'react-navigation';
import TabScreen from './screens/TabScreen'

import AppNavigator from './navigation/AppNavigator'
import Auth from './components/Auth/Auth'
import RootNavigator from './navigation/RootNavigator'
const App = () => {
  return (
    <RootNavigator/>
  )
}

export default App;
