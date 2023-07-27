import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from './style';
import CText from '../text/CText';
import CStrings from '../../strings/CStrings';
import CColors from '../../color/CColors';
import CCheckBox from '../check_box/CCheckBox';
function CItemCard(props) {
  //demo usestate
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View style={styles.containerLeft}>
        <CText text={props.headerText} style={{fontSize: 17}} />
        <CText
          text={props.titleText}
          style={{color: CColors.gray, fontSize: 12}}
        />
      </View>
      <View style={styles.containerRight}>
        <CCheckBox
          checkIconName={props.checkIconName}
          checkIconType={props.checkIconType}
          checkIconColor={props.checkIconColor}
          checkIconSize={props.checkIconSize}
          checkcontainerStyle={props.checkcontainerStyle}
          unCheckIconName={props.unCheckIconName}
          checked={props.checked}
          onPress={props.onPress}
        />
      </View>
    </TouchableOpacity>
  );
}

//defult props
CItemCard.defaultProps = {
  //text
  headerText: CStrings.cataring_povider,
  titleText: CStrings.cataring_povider_title,

  //check props
  checkIconName: 'radio-button-checked',
  checkIconType: 'material',
  checkIconColor: CColors.green,
  checkIconSize: 40,
  checkcontainerStyle: {marginRight: 0},

  //unCheck props
  unCheckIconName: 'radio-button-unchecked',
};

//

export default CItemCard;
