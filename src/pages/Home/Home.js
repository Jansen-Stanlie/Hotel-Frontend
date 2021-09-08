/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {CardHotel, HotelList} from '../../components';
import COLORS from '../../utils/constant/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedCategoryIndex: 0};
  }

  ListCategories = () => {
    return (
      <View style={styles.categoryListContainer}>
        <Text style={styles.categoryListText}>On Going Promo</Text>
      </View>
    );
  };
  render() {
    return (
      <ScrollView>
        <View style={styles.header}>
          <View>
            <Text style={{color: COLORS.grey}}>Location</Text>
            <Text
              style={{color: COLORS.dark, fontSize: 20, fontWeight: 'bold'}}>
              Medan
            </Text>
          </View>
          <TouchableOpacity>
            <Image
              style={styles.profileImage}
              source={require('../../Assets/images/person.jpg')}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          }}>
          <View style={styles.searchInputContainer}>
            <Icon name="search" size={25} />

            <TextInput placeholder="Search address, city, location" />
          </View>
          <TouchableOpacity>
            <View style={styles.sortBtn}>
              <Icon name="book" color={COLORS.white} size={25} />
            </View>
          </TouchableOpacity>
        </View>
        <HotelList />
        <this.ListCategories />
        <CardHotel />
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  searchInputContainer: {
    height: 50,
    backgroundColor: COLORS.white,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  sortBtn: {
    backgroundColor: COLORS.dark,
    height: 50,
    width: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  categoryListText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 5,
    color: COLORS.black,
  },
  categoryListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 0,
    paddingHorizontal: 40,
  },
});
export default Home;
