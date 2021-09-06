import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Slider1, Slider2, Slider3} from '../../../Assets/images';
import {SliderBox} from 'react-native-image-slider-box';
import {responsiveHeight} from '../../../utils';
import COLORS from '../../../utils/constant/Colors';

class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [Slider1, Slider2, Slider3],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <SliderBox
          images={this.state.images}
          autoplay
          circleLoop
          sliderBoxHeight={responsiveHeight(132)}
          ImageComponentStyle={styles.slider}
          dotStyle={styles.dotStyle}
          imageLoadingColor={COLORS.primary}
        />
      </View>
    );
  }
}
export default ImageSlider;
const styles = StyleSheet.create({
  container: {
    marginTop: -15,
  },

  slider: {
    borderRadius: 10,
    width: '100%',
    height: 420,
    borderBottomLeftRadius: 100,
  },
  dotStyle: {
    width: 10,
    height: 5,
    borderRadius: 6,
  },
});
