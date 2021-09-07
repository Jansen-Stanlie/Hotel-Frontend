import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {HotelList} from '../../components';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <HotelList />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Home;
