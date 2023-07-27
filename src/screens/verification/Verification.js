import React, {useContext} from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from './style';
import CText from '../../components/text/CText';
import CHeader from '../../components/header/CHeader';
import CGradiantButton from '../../components/gradiant_button/CGradiantButton';
import CStrings from '../../strings/CStrings';
import SmallInputText from '../../components/small_input_text/SmallInputText';
import {AppContext} from '../../context/CContext';

function Verification(props) {
  const {windowHeight} = useContext(AppContext);

  const submittButton = () => {
    console.log(`submittButton is Press`);
    props.navigation.navigate('account_created_successfully');
  };
  const changeMobileNumberButton = () => {
    console.log(`changeMobileNumberButton press`);
    props.navigation.navigate('login');
  };
  return (
    <CHeader barStyle="light-content" iconSize={0}>
      <CText
        text={CStrings.input_the_verification_code}
        style={{fontSize: 15}}
      />
      <View style={{flex: 1, justifyContent: 'space-evenly'}}>
        <SmallInputText />
        <CText text={CStrings.resend_code_in} style={styles.textStyle} />
      </View>
      <View style={{flex: 1, justifyContent: 'space-evenly'}}>
        <CGradiantButton onPress={submittButton} />
        <TouchableOpacity onPress={changeMobileNumberButton}>
          <CText
            text={CStrings.change_mobile_number}
            style={styles.textStyle}
          />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <CText
          text={CStrings.accept_tinBela_trams_conditation}
          style={styles.textStyle}
        />
      </View>
    </CHeader>
  );
}
export default Verification;
