/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';

import {View, Image, ScrollView, Text} from 'react-native';
import {ScrollList} from '../..';
import {LogoHotels, Slider1, Slider2, Slider3} from '../../../Assets';
import {fonts} from '../../../utils';
import StarRatings from '../../atom/StarRatings/StarRatings';
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
            borderBottomColor: '#E8E9ED',
            borderBottomWidth: 1,
            marginTop: 16,
            marginBottom: 20,
            marginHorizontal: 16,
          }}
        />
        <View
          style={{
            height: 15,
            width: 100,
            marginLeft: 16,
          }}>
          {/* <Image
            source={LogoHotels}
            style={{
              width: undefined,
              height: undefined,
              resizeMode: 'contain',
              flex: 1,
            }}
          /> */}
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginBottom: 16,
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
        <View style={{flexDirection: 'row', paddingLeft: 16}}>
          <ScrollView horizontal={true}>
            <ScrollList title="KFC Minang" img={Slider1} star={4} />
            <ScrollList title="Bakmi Non-Halal" img={Slider2} star={4.5} />
            <ScrollList title="Martabak Nuklir" img={Slider3} star={2} />
          </ScrollView>
        </View>

        <View
          style={{
            borderBottomColor: '#E8E9ED',
            borderBottomWidth: 1,
            marginTop: 16,
            marginBottom: 20,
            marginHorizontal: 16,
          }}
        />
      </View>
    );
  }
}

export default HotelList;
