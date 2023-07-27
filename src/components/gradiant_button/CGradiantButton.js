import React, {useContext} from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from './style';
import GradiantColor from '../gradiant_color/GradiantColor';
import CText from '../text/CText';
import CColors from '../../color/CColors';
import {AppContext} from '../../context/CContext';
function CGradiantButton(props) {
  const {windowHeight} = useContext(AppContext);
  return (
    <View style={[styles.container(windowHeight), {...props.containerStyle}]}>
      <GradiantColor gradiantStyle={styles.gradiant} end={{x: 1, y: 1}}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.buttonContainer, {...props.buttonContainerStyle}]}
          onPress={props.onPress}>
          <CText text={props.text} style={{color: CColors.white}} />
        </TouchableOpacity>
      </GradiantColor>
    </View>
  );
}
CGradiantButton.defaultProps = {
  text: 'সাবমিট',
};
export default CGradiantButton;
