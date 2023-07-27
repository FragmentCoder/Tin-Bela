import React from 'react';
import {View} from 'react-native';
import styles from './style';
import CText from '../../components/text/CText';
import CTextInput from '../../components/input_text/CInputText';
function CInputTextWithText(props) {
  return (
    <View style={[styles.container, {...props.containerStyle}]}>
      <CText text={props.text} style={styles.textStyle} />
      <CTextInput
        placeholder={props.placeholder}
        keyboardType={props.keyboardType}
        onChangeText={props.onChangeText}
        defaultValue={props.defaultValue}
        value={props.value}
        textInputStyle={props.textInputStyle}
      />
    </View>
  );
}
CInputTextWithText.defaultProps = {
  text: 'white somthing',
};
export default CInputTextWithText;
