import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import CText from '../../components/text/CText';
import CColors from '../../color/CColors';
import CHeader from '../../components/header/CHeader';
import CStrings from '../../strings/CStrings';
import SideDrawer from 'react-native-side-drawer';

function Others() {
  const [openDrawer, setOpenDrawer] = useState(true);
  return (
    <View>
      <CText text={'dsadsad'} style={{color: CColors.gray}} />
      <SideDrawer
        open={openDrawer}
        drawerContent={
          <View style={{backgroundColor: CColors.red, flex: 1}}>
            <Text>Tapu</Text>
          </View>
        }
      />
    </View>
  );
}
export default Others;
