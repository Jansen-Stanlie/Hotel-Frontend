/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
import React from 'react';
import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  Image,
  View,
  Dimensions,
} from 'react-native';
import COLORS from '../../../utils/constant/Colors';
const {width} = Dimensions.get('screen');
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Slider1} from '../../../Assets';

const CardHotel = props => {
  return (
    <View style={style.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        //   onPress={() => navigation.navigate('DetailsScreen', house)}
      >
        <View style={style.card}>
          {/* House image */}
          <Image source={Slider1} style={style.cardImage} />
          <View>
            {/* Title and price container */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                {/* {house.title} */}
                "IBI"
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: COLORS.red,
                    fontSize: 16,
                    textDecorationLine: 'line-through',
                  }}>
                  ${'$1,500' + ' '}
                </Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: COLORS.black,
                    fontSize: 16,
                    textDecorationLine: 'none',
                  }}>
                  - $1,000
                </Text>
              </View>
            </View>

            {/* Location text */}

            <Text style={{color: COLORS.grey, fontSize: 14, marginTop: 5}}>
              {/* {house.location} */}
              Medan
            </Text>

            {/* Facilities container */}
            <View style={{marginTop: 10, flexDirection: 'row'}}>
              <View style={style.facility}>
                <Icon name="hotel" size={18} />
                <Text style={style.facilityText}>2</Text>
              </View>
              <View style={style.facility}>
                <Icon name="bathtub" size={18} />
                <Text style={style.facilityText}>2</Text>
              </View>
              <View style={style.facility}>
                <Icon name="aspect-ratio" size={18} />
                <Text style={style.facilityText}>100m</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginTop: 0,
    marginBottom: 20,
  },
  optionsCard: {
    height: 210,
    width: width / 2 - 30,
    elevation: 15,
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 20,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  optionsCardImage: {
    height: 140,
    borderRadius: 10,
    width: '100%',
  },
  optionListsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  categoryListText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 5,
    color: COLORS.grey,
  },
  activeCategoryListText: {
    color: COLORS.dark,
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  categoryListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    paddingHorizontal: 40,
  },
  card: {
    height: 250,
    backgroundColor: COLORS.white,
    elevation: 10,
    width: width - 40,
    marginRight: 20,
    padding: 15,
    borderRadius: 20,
  },
  cardImage: {
    width: '100%',
    height: 120,
    borderRadius: 15,
  },
  facility: {flexDirection: 'row', marginRight: 15},
  facilityText: {marginLeft: 5, color: COLORS.grey},
});
export default CardHotel;
