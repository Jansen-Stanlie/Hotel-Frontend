import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import OnBoarding from './pages/onBoarding/onBoarding';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <OnBoarding />;
  }
}

export default App;
