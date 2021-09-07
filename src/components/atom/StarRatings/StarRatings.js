import React, {Component} from 'react';
import {View} from 'react-native';
import StarRating from 'react-native-star-rating';

class StarRatings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <StarRating
          disabled={true}
          maxStars={5}
          rating={this.props.star}
          fullStarColor={'gold'}
          starSize={20}
        />
      </View>
    );
  }
}

export default StarRatings;
