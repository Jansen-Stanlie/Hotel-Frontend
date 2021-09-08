import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {HotelLogo} from '../../../Assets';
export default function Logo() {
  return <HotelLogo width={354} height={125} margin={20} />;
}

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 110,
    marginBottom: 8,
  },
});
