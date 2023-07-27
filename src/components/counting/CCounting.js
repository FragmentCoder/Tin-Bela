import React from 'react';
import {View} from 'react-native';
import styles from './style';
import CText from '../../components/text/CText';
import CColors from '../../color/CColors';
import CStrings from '../../strings/CStrings';
import CIcon from '../icon/CIcon';

function CCounting(props) {
  return (
    <View style={[styles.container, {...props.containerStyle}]}>
      <CIcon
        iconName={'minus'}
        iconType={'font-awesome'}
        iconSize={props.iconSize}
        iconColor={CColors.gray}
        onPress={props.minusIcon}
      />
      <CText
        text={'০১'}
        containerStyle={styles.textContiner}
        style={{fontSize: props.fontSize}}
      />
      <CIcon
        iconName={'plus'}
        iconType={'font-awesome'}
        iconSize={props.iconSize}
        iconColor={CColors.gray}
        onPress={props.plusIcon}
      />
    </View>
  );
}
CCounting.defaultProps = {
  iconSize: 20,
  fontSize: 14,
};
export default CCounting;
