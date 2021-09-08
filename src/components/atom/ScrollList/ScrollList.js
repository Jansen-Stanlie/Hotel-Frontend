/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import COLORS from '../../../utils/constant/Colors';
import StarRatings from '../../atom/StarRatings/StarRatings';

const ScrollList = props => {
  return (
    <TouchableOpacity style={{marginRight: 16}}>
      <View
        style={{
          width: 200,
          height: 270,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          padding: 15,
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 10,
          backgroundColor: COLORS.white,
          borderRadius: 16,
        }}>
        <Image source={props.img} style={styles.image} />
        <View style={styles.star}>
          <StarRatings star={props.star} />
        </View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: '#1C1C1C',

            textAlign: 'center',
          }}>
          {props.title}
        </Text>
      </View>
      <View style={{justifyContent: 'space-around'}}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: '#1C1C1C',

            textAlign: 'center',
          }}
        />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  star: {
    position: 'absolute',
    marginTop: 210,
    marginLeft: 90,
  },
  image: {width: '100%', height: 220, borderRadius: 10},
});
export default ScrollList;
