import React, {useContext, useState} from 'react';
import {View} from 'react-native';
import styles from './style';
import CHeader from '../../components/header/CHeader';
import CStrings from '../../strings/CStrings';
import CInputTextWithText from '../../components/input_text_with_text/CInputTextWithText';
import CheckBoxWithText from '../../components/check_box_with_text/CheckBoxWithText';
import CButton from '../../components/button/CButton';
import CColors from '../../color/CColors';
import {AppContext} from '../../context/CContext';
import SevenDaySelect from '../../components/seven_day/SevenDaySelect';

function CreateGroup2(props) {
  //hooks
  const {setAccountStatus} = useContext(AppContext);

  //fanction
  const mobileNumber = data => {
    console.log(`mobile Number = ${data}`);
    setAlternativeNumber(data);
  };

  const saveButton = () => {
    setAccountStatus(CStrings.pending);
    props.navigation.navigate('home');
  };
  //hooks
  const [alternativeNumber, setAlternativeNumber] = useState(null);

  return (
    <CHeader rightIconSize={0} title={CStrings.create_group}>
      <View style={styles.container}>
        <View style={styles.inputText}>
          <CInputTextWithText
            text={CStrings.alternative_number}
            placeholder={CStrings.phone_number_placeHolder}
            onChangeText={mobileNumber}
          />
        </View>
        <SevenDaySelect />
        <View style={styles.buttonContiner}>
          <CButton
            text={CStrings.save}
            buttonStyles={styles.button}
            textStyles={{fontSize: 22, color: CColors.white}}
            onPress={saveButton}
          />
        </View>
      </View>
    </CHeader>
  );
}
export default CreateGroup2;
