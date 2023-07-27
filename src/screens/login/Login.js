import React from 'react';
import {View} from 'react-native';
import styles from './style';
import CText from '../../components/text/CText';
import CColors from '../../color/CColors';
import CTextInput from '../../components/input_text/CInputText';
import CHeader from '../../components/header/CHeader';
import GradiantButtonWithIcon from '../../components/gradiant_button_with_icon/GradiantButtonWithIcon';
import CStrings from '../../strings/CStrings';
function Login(props) {
  const nextButton = () => {
    console.log('Next Button is click');
    props.navigation.navigate('verification');
  };
  return (
    <CHeader barStyle="light-content" iconSize={0}>
      <View style={styles.firstDiv}>
        <CText
          text={CStrings.write_your_phone_number}
          style={{color: CColors.black}}
        />
      </View>
      <View style={styles.secondDiv}>
        <View style={styles.firstInput}>
          <CTextInput defaultValue="+880" />
        </View>
        <View style={styles.secondInput}>
          <CTextInput placeholder={CStrings.phone_number_placeHolder} />
        </View>
      </View>
      <View style={{flex: 1}}></View>
      <CText
        text={CStrings.next_button_details}
        style={{color: CColors.gray, textAlign: 'center'}}
      />
      <View style={styles.thirdDiv}>
        <GradiantButtonWithIcon onPress={nextButton} />
      </View>
      <View style={{flex: 1}}></View>
    </CHeader>
  );
}
export default Login;
