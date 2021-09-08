/* eslint-disable no-unused-vars */
import {Color} from 'chalk';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  Hotel,
  HotelActive,
  Profile,
  ProfileActive,
  Menu,
  MenuActive,
} from '../../../Assets';
import {fonts} from '../../../utils';
import COLORS from '../../../utils/constant/Colors';

const TabItem = ({isFocused, onLongPress, onPress, label}) => {
  const Icon = () => {
    if (label === 'Home') {
      return isFocused ? <HotelActive /> : <Hotel />;
    }
    if (label === 'Profile') {
      return isFocused ? <ProfileActive /> : <Profile />;
    }
    return <Hotel />;
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};
export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  text: isFocused => ({
    color: isFocused ? COLORS.white : COLORS.lightGray3,
    marginTop: 4,
    fontSize: 11,
    fontFamily: fonts.primary.bold,
  }),
});
