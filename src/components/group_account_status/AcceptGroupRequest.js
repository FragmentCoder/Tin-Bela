import React from 'react';
import {View} from 'react-native';
import styles from './style';
import CText from '../text/CText';
import CColors from '../../color/CColors';
import CHeader from '../header/CHeader';
import CStrings from '../../strings/CStrings';
import CButton from '../button/CButton';

function AcceptGroupRequest(props) {
  return (
    <View style={{flex: 1}}>
      <View style={styles.textGroup}>
        <CText
          text={CStrings.your_request_accept}
          style={styles.headingText(CColors.green)}
        />

        <CText text={CStrings.group_name_demo} style={styles.titleText} />
        <CText text={CStrings.area_name_demo} style={styles.titleText} />
      </View>

      <View style={styles.lastDiv}>
        <CButton
          buttonStyles={styles.button1}
          text={CStrings.list_your_food}
          textStyles={styles.buttonText}
          onPress={props.makeMealListButton}
        />
      </View>
    </View>
  );
}
export default AcceptGroupRequest;
