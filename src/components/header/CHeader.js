import React, {useContext} from 'react';
import {View, useWindowDimensions} from 'react-native';
import styles from './style';
import CStatusbar from '../statusbar/CStatusbar';
import CText from '../text/CText';
import CColors from '../../color/CColors';
import CIcon from '../icon/CIcon';
import {AppContext} from '../../context/CContext';

function CHeader(props) {
  const {windowHeight, setWindowHeight, setWindowWidth} =
    useContext(AppContext);
  const {height, width} = useWindowDimensions();
  setWindowHeight(height);
  setWindowWidth(width);

  return (
    <View style={props.scrollAble ? {flex: 1} : {height: windowHeight}}>
      <View style={{height: windowHeight / 15}}>
        <CStatusbar barStyle={props.barStyle} />
        <View style={styles.container}>
          <View style={styles.iconContainer}>
            <CIcon
              iconName={props.iconName}
              iconType={props.iconType}
              iconColor={props.iconColor}
              iconSize={props.iconSize}
              containerStyle={props.containerStyle}
            />
          </View>
          <View style={styles.text}>
            <CText style={{fontSize: 18}} text={props.title} />
          </View>

          <View style={{flex: 2}}>
            <View style={styles.iconContainer}>
              <CIcon
                iconName={'notifications'}
                iconType={'ionicons'}
                iconColor={CColors.black}
                iconSize={props.rightIconSize}
                containerStyle={props.rightIContainerStyle}
              />
            </View>
          </View>
        </View>
      </View>

      <View
        /* if screen needes scroll than write scrollAble=true*/
        style={
          props.scrollAble
            ? {flex: 1}
            : [
                styles.childrenContainer(windowHeight),
                {...props.containerStyle},
              ]
        }>
        {props.children}
      </View>
    </View>
  );
}
CHeader.defaultProps = {
  iconName: 'arrowleft',
  iconType: 'antdesign',
  iconColor: CColors.black,
  iconSize: 30,
  rightIconSize: 0,
  scrollAble: false,
};
export default CHeader;
