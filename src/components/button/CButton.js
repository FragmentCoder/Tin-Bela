import React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './style';
import CText from '../text/CText';
import CColors from '../../color/CColors';
import CStrings from '../../strings/CStrings';

function CButton(props) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.container, {...props.buttonStyles}]}
      onPress={props.onPress}>
      <CText text={props.text} style={props.textStyles} />
      {props.children}
    </TouchableOpacity>
  );
}
CButton.defaultProps = {
  text: CStrings.next_button_title,
  textStyles: {
    color: CColors.white,
  },
};

export default CButton;
