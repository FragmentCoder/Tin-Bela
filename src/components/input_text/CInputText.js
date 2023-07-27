import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './style';
import CColors from '../../color/CColors';
function CTextInput(props) {
  return (
    <View style={[styles.container, {...props.ContainerStyle}]}>
      <TextInput
        style={[styles.input, {...props.textInputStyle}]}
        onChangeText={props.onChangeText}
        cursorColor={CColors.green}
        value={props.value}
        placeholder={props.placeholder}
        keyboardType={props.keyboardType}
        placeholderTextColor={CColors.gray}
      />
    </View>
  );
}

CTextInput.defaultProps = {
  keyboardType: 'numeric',
};
export default CTextInput;
