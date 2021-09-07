/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {StatusBar, View, Text, StyleSheet} from 'react-native';
import {Tombol} from '../../components/atom';
import ImageSlider from '../../components/molecules/imageSlider/imageSlider';

import COLORS from '../../utils/constant/Colors';

class OnBoarding extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <StatusBar translucent backgroundColor={COLORS.tranparent} />

        {/* Onboarding Image */}
        <ImageSlider />

        {/* Title and text container */}
        <View style={{paddingHorizontal: 20, paddingTop: 20}}>
          {/* Title container */}
          <View>
            <Text style={style.title}>Find your</Text>
            <Text style={style.title}>sweet Place to Stay</Text>
          </View>

          {/* Text container */}
          <View style={{marginTop: 10}}>
            <Text style={style.textStyle}>
              Schedule visits in just a few clicks
            </Text>
            <Text style={style.textStyle}>visit in just a few clicks</Text>
          </View>
        </View>

        {/* Button container */}
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            paddingBottom: 40,
          }}>
          {/* button */}
          <Tombol
            title="Continue"
            onPress={() => {
              this.props.navigation.replace('MainApp');
            }}
          />
        </View>
      </View>
    );
  }
}
export default OnBoarding;
const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    textAlign: 'center',
  },
  image: {
    height: 420,
    width: '100%',
    borderBottomLeftRadius: 100,
  },
  indicatorContainer: {
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  indicator: {
    height: 3,
    width: 30,
    backgroundColor: COLORS.grey,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  indicatorActive: {
    backgroundColor: COLORS.dark,
  },

  title: {fontSize: 32, fontWeight: 'bold'},
  textStyle: {fontSize: 20, color: COLORS.grey},
});
