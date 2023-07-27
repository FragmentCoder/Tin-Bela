import React from 'react';
import {View} from 'react-native';
import styles from './style';
import CText from '../text/CText';
import CColors from '../../color/CColors';
import CButton from '../button/CButton';

function NewGroupRequest(props) {
  return (
    <View style={{flex: 1}}>
      <View style={styles.textGroup}>
        <CText
          text={CStrings.today_food_list}
          style={styles.headingText(CColors.black)}
        />
        <CText text={CStrings.food_info} style={{color: CColors.gray}} />
      </View>
      <View style={styles.lastDiv}>
        <CButton
          buttonStyles={styles.button1}
          text={CStrings.join_request_send}
          textStyles={styles.buttonText}
          onPress={props.jointRequestButton}
        />
        <CButton
          buttonStyles={styles.button2}
          text={CStrings.create_new_group}
          textStyles={styles.buttonText}
          onPress={props.newGroupCreateButton}
        />
      </View>
    </View>
  );
}
export default NewGroupRequest;
