import React from 'react';
import {StatusBar, View} from 'react-native';

import CColors from '../../color/CColors';
function CStatusbar(props) {
  //setBarColor();

  return (
    <View>
      <StatusBar
        backgroundColor={props.backgroundColor}
        barStyle={props.barStyle}
      />
    </View>
  );
}
CStatusbar.defaultProps = {
  barStyle: 'dark-content',
  backgroundColor: CColors.white,
};
export default CStatusbar;
