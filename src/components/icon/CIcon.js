import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Icon} from '@rneui/themed';
function CIcon(props) {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
      <Icon
        name={props.iconName}
        type={props.iconType}
        color={props.iconColor}
        size={props.iconSize}
        containerStyle={props.containerStyle}
        reverse={props.reverse}
        raised={props.raised}
      />
    </TouchableOpacity>
  );
}

CIcon.defaultProps = {
  iconName: 'window-minimize',
  iconType: 'font-awesome',
  iconColor: '#517fa4',
  iconSize: 50,
};
export default CIcon;
