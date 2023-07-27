import React, {useContext, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from './style';
import CText from '../../components/text/CText';
import CColors from '../../color/CColors';
import {AppContext} from '../../context/CContext';
import CIcon from '../icon/CIcon';
import CStrings from '../../strings/CStrings';
import {TransitionPresets} from '@react-navigation/stack';

function BottomTab(props) {
  const {windowHeight} = useContext(AppContext);
  const [selectedMenu, setSelectedMenu] = useState(1);

  const homeFunction = () => {
    const menuNum = 1;
    if (selectedMenu != menuNum) {
      if (selectedMenu > menuNum) {
        setSelectedMenu(menuNum);
        props.navigation.navigate('home', {
          options: {...TransitionPresets.SlideFromRightIOS},
        });
      } else {
        setSelectedMenu(menuNum);
        props.navigation.navigate('home', {
          options: {...TransitionPresets.SlideFromLeftIOS},
        });
      }
    } else {
      return;
    }
    console.log(`Home is click`);
  };
  const groupFunction = () => {
    const menuNum = 2;
    if (selectedMenu != menuNum) {
      if (selectedMenu > menuNum) {
        setSelectedMenu(menuNum);
        props.navigation.navigate('group', {
          options: {...TransitionPresets.SlideFromRightIOS},
        });
      } else {
        setSelectedMenu(menuNum);
        props.navigation.navigate('home', {
          options: {...TransitionPresets.SlideFromLeftIOS},
        });
      }
    } else {
      return;
    }
    console.log(`group is click`);
  };
  const costFunction = () => {
    setSelectedMenu(3);
    console.log(`calculation is click`);
  };
  const othersFunction = () => {
    setSelectedMenu(4);
    console.log(`others is click`);
  };
  const MenuItem = props => {
    return (
      <TouchableOpacity
        style={styles.subContainer}
        activeOpacity={0.8}
        onPress={props.onPress}>
        <CIcon
          onPress={props.onPress}
          iconName={props.iconName}
          iconType={props.iconType}
          iconSize={30}
          iconColor={props.color}
        />
        <CText text={props.title} style={{color: props.color, fontSize: 14}} />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container(windowHeight)}>
      <MenuItem
        title={CStrings.home}
        iconName="home-outline"
        iconType="ionicon"
        onPress={homeFunction}
        color={selectedMenu == 1 ? CColors.green : CColors.gray}
      />
      <MenuItem
        title={CStrings.group}
        iconName="account-group"
        iconType="material-community"
        onPress={groupFunction}
        color={selectedMenu == 2 ? CColors.green : CColors.gray}
      />
      <MenuItem
        title={CStrings.cost}
        iconName="calculator"
        iconType="ionicon"
        onPress={costFunction}
        color={selectedMenu == 3 ? CColors.green : CColors.gray}
      />
      <MenuItem
        title={CStrings.others}
        iconName="menu"
        iconType="ionicon"
        onPress={othersFunction}
        color={selectedMenu == 4 ? CColors.green : CColors.gray}
      />
    </View>
  );
}
export default BottomTab;
