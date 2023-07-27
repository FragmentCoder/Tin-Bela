import React, {useContext} from 'react';
import {View} from 'react-native';
import styles from './style';
import CText from '../../components/text/CText';
import CHeader from '../../components/header/CHeader';
import CStrings from '../../strings/CStrings';
import SmallInputText from '../../components/small_input_text/SmallInputText';
import CGradiantButton from '../../components/gradiant_button/CGradiantButton';
import {AppContext} from '../../context/CContext';

function JoinTheOfficeGroup(props) {
  //hooks
  const {setAccountStatus} = useContext(AppContext);

  //function
  const saveTheJoinRequest = () => {
    console.log(`saveTheJoinRequest press!`);
    setAccountStatus(CStrings.pending);
    props.navigation.navigate('home');
  };
  return (
    <CHeader title={CStrings.join_office_group}>
      <CText text={CStrings.type_office_code} />
      <View style={styles.inputItemDiv}>
        <SmallInputText />
        <CText
          text={CStrings.get_verification_code_from_office_admin}
          style={styles.text}
        />
      </View>
      <View style={{flex: 3}}>
        <CGradiantButton
          text={CStrings.next_button_title}
          onPress={saveTheJoinRequest}
        />
      </View>
    </CHeader>
  );
}
export default JoinTheOfficeGroup;
