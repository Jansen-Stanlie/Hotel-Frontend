import React, {Component} from 'react';
import Router from './router/Router';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-native-paper';
import {theme} from './core/theme';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Provider theme={theme}>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
