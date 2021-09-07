/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import StarRatings from '../../atom/StarRatings/StarRatings';

const ScrollList = props => {
  return (
    <TouchableOpacity style={{marginRight: 16}}>
      <View style={{width: 200, height: 250}}>
        <Image
          source={props.img}
          style={{
            width: undefined,
            height: undefined,
            resizeMode: 'cover',
            borderRadius: 10,
            flex: 1,
          }}
        />
        <View style={styles.star}>
          <StarRatings star={props.star} />
        </View>
      </View>
      <View style={{justifyContent: 'space-around'}}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: '#1C1C1C',
            marginTop: 10,
          }}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  star: {
    position: 'absolute',
    marginTop: 220,
    marginLeft: 100,
  },
});
export default ScrollList;
