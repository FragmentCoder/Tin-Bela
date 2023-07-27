import React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './style';
import CColors from '../../color/CColors';
import GradiantColor from '../gradiant_color/GradiantColor';
import CIcon from '../icon/CIcon';

function GradiantButtonWithIcon(props) {
  return (
    <TouchableOpacity
      style={[styles.container, {...props.style}]}
      activeOpacity={0.8}
      onPress={props.onPress}>
      <GradiantColor gradiantStyle={styles.gradiant}>
        <CIcon
          iconName={props.iconName}
          iconType={props.iconType}
          iconColor={props.iconColor}
          iconSize={props.iconSize}
        />
      </GradiantColor>
    </TouchableOpacity>
  );
}
GradiantButtonWithIcon.defaultProps = {
  iconName: 'arrowright',
  iconType: 'antdesign',
  iconColor: CColors.white,
  iconSize: 45,
};
export default GradiantButtonWithIcon;
