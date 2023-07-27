import React from 'react';
import {View} from 'react-native';
import CColors from '../../color/CColors';
import {CheckBox} from '@rneui/themed';
import CIcon from '../icon/CIcon';

function CCheckBox(props) {
  return (
    <View>
      <CheckBox
        title={props.title}
        textStyle={props.textStyle}
        center
        containerStyle={props.containerStyle}
        checkedIcon={
          <CIcon
            iconName={props.checkIconName}
            iconType={props.checkIconType}
            iconColor={props.checkIconColor}
            iconSize={props.checkIconSize}
            containerStyle={props.checkcontainerStyle}
          />
        }
        uncheckedIcon={
          <CIcon
            iconName={props.unCheckIconName}
            iconType={props.checkIconType}
            iconColor={props.checkIconColor}
            iconSize={props.checkIconSize}
            containerStyle={props.checkcontainerStyle}
          />
        }
        checked={props.checked}
        onPress={props.onPress}
      />
    </View>
  );
}
//defult props
CCheckBox.defaultProps = {
  //check props
  checkIconName: 'radio-button-checked',
  checkIconType: 'material',
  checkIconColor: CColors.green,
  checkIconSize: 40,
  checkcontainerStyle: {marginRight: 50},

  //unCheck props
  unCheckIconName: 'radio-button-unchecked',
};
export default CCheckBox;
