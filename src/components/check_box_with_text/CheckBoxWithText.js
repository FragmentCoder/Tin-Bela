import React from 'react';
import {View} from 'react-native';
import styles from './style';

import CCheckBox from '../check_box/CCheckBox';

function CheckBoxWithText(props) {
  return (
    <View style={styles.container}>
      <CCheckBox
        checkIconName="checkbox-marked-outline"
        checkIconType="material-community"
        unCheckIconName="checkbox-blank-outline"
        checkcontainerStyle={{marginRight: 0}}
        checkIconSize={props.iconSize}
        checked={props.checked}
        onPress={props.onPress}
        title={props.title}
        containerStyle={styles.checkBox}
        textStyle={[styles.text, {...{fontSize: props.fontSize}}]}
      />
    </View>
  );
}
CheckBoxWithText.defaultProps = {
  iconSize: 30,
  fontSize: 17,
};
export default CheckBoxWithText;
