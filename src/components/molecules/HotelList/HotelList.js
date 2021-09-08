/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';

import {View, ScrollView, Text} from 'react-native';
import {ScrollList} from '../..';
import {Slider1, Slider2, Slider3} from '../../../Assets';
import {fonts} from '../../../utils';

class HotelList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <View
          style={{
            height: 15,
            width: 100,
            marginLeft: 16,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginBottom: 5,
            paddingHorizontal: 16,
          }}>
          <Text
            style={{
              fontSize: 17,
              color: '#1C1C1C',
              fontFamily: fonts.primary.bold,
            }}>
            Our Partner
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingLeft: 16,
          }}>
          <ScrollView horizontal={true}>
            <ScrollList title="JW Marriot" img={Slider1} star={4} />
            <ScrollList title="BPJS Halal" img={Slider2} star={4.5} />
            <ScrollList title="IBIS" img={Slider3} star={2} />
          </ScrollView>
        </View>

        <View
          style={{
            borderBottomColor: '#E8E9ED',
            borderBottomWidth: 1,
            marginTop: 16,
            marginBottom: 0,
            marginHorizontal: 16,
          }}
        />
      </View>
    );
  }
}

export default HotelList;
