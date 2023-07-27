import React from 'react';
import {Text, View} from 'react-native';
import styles from './style';
function CText(props) {
  return (
    <View style={props.containerStyle}>
      <Text style={[styles.text, {...props.style}]}>{props.text}</Text>
    </View>
  );
}

export default CText;
