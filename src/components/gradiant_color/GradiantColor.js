import React from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';

function GradiantColor(props) {
  return (
    <View style={{flex: 1}}>
      <LinearGradient
        start={props.start}
        end={props.end}
        colors={['#4D7107', '#8FA74E']}
        style={[styles.container, {...props.gradiantStyle}]}>
        {props.children}
      </LinearGradient>
    </View>
  );
}
GradiantColor.defaultProps = {
  start: {x: 1, y: 0.1},
  end: {x: 0.1, y: 1},
};
export default GradiantColor;
