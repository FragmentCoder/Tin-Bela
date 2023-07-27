import React from 'react';
import {View} from 'react-native';

import CText from '../../components/text/CText';
import CColors from '../../color/CColors';
import CHeader from '../../components/header/CHeader';
import CStrings from '../../strings/CStrings';

function GroupCreate2() {
  return (
    <CHeader title={CStrings.account_settings}>
      <View>
        <CText text={CStrings.type_office_code} style={{color: CColors.gray}} />
      </View>
    </CHeader>
  );
}
export default GroupCreate2;
