import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import OnBoarding from './pages/onBoarding/onBoarding';
import Router from './router/Router';
import {NavigationContainer} from '@react-navigation/native';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    );
  }
}

export default App;
