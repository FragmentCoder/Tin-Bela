import React from 'react';
import {View} from 'react-native';
import styles from './style';
import CTextInput from '../input_text/CInputText';

function SmallInputText() {
  const inputCode1 = value => {
    console.log(`input code on is ${value}`);
  };
  return (
    <View style={styles.textInputDiv}>
      <CTextInput
        onChangeText={inputCode1}
        placeholder={CStrings.zero}
        ContainerStyle={styles.textInputContainerStyle}
        textInputStyle={styles.textInputStyle}
      />
      <CTextInput
        onChangeText={inputCode1}
        placeholder={CStrings.zero}
        ContainerStyle={styles.textInputContainerStyle}
        textInputStyle={styles.textInputStyle}
      />
      <CTextInput
        onChangeText={inputCode1}
        placeholder={CStrings.zero}
        ContainerStyle={styles.textInputContainerStyle}
        textInputStyle={styles.textInputStyle}
      />
      <CTextInput
        onChangeText={inputCode1}
        placeholder={CStrings.zero}
        ContainerStyle={styles.textInputContainerStyle}
        textInputStyle={styles.textInputStyle}
      />
    </View>
  );
}
export default SmallInputText;
