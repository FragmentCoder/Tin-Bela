import React from 'react';
import {View} from 'react-native';
import styles from './style';
import CText from '../../components/text/CText';
import CColors from '../../color/CColors';
import CStrings from '../../strings/CStrings';
import {Rating, AirbnbRating} from 'react-native-ratings';

function RatingWithText(props) {
  return (
    <View style={styles.container}>
      <CText text={props.text} />
      <AirbnbRating
        defaultRating={0}
        onFinishRating={props.onFinishRating}
        selectedColor={CColors.green}
        size={22}
        showRating={false}
        starImage={require('../../../assets/images/star.png')}
        starContainerStyle={styles.starContainer}
      />
    </View>
  );
}
export default RatingWithText;
