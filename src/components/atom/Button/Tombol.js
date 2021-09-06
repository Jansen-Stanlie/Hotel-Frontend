/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {fonts} from '../../../utils';
class Tombol extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {title} = this.props;
    return (
      <TouchableOpacity>
        <View style={style.btn}>
          <Text
            style={{
              color: 'white',
              fontSize: 22,
              fontFamily: fonts.primary.bold,
            }}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default Tombol;

const style = StyleSheet.create({
  btn: {
    height: 60,
    marginHorizontal: 20,
    backgroundColor: 'black',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
  },
});
