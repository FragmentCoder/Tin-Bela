import React from 'react';
import {View} from 'react-native';
import styles from './style';
import CText from '../text/CText';
import CColors from '../../color/CColors';
import CHeader from '../header/CHeader';
import CStrings from '../../strings/CStrings';

function PendingGroupRequest() {
  return (
    <View style={{flex: 1}}>
      <View style={styles.textGroup}>
        <CText
          text={CStrings.your_requesting_group_is}
          style={styles.headingText(CColors.red)}
        />

        <CText text={CStrings.group_name_demo} style={styles.titleText} />
        <CText text={CStrings.area_name_demo} style={styles.titleText} />
      </View>

      <View style={styles.lastDiv}>
        <CText
          text={CStrings.your_request_is_now_in_pending}
          style={{color: CColors.light_gray, fontSize: 12}}
        />
      </View>
    </View>
  );
}
PendingGroupRequest.defaultProps = {};
export default PendingGroupRequest;
