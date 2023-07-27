import React from 'react';
import {View, StyleSheet} from 'react-native';
import CColors from '../../color/CColors';

function CCard2(props) {
  return (
    <View style={[styles.container, {...props.style}]}>{props.children}</View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: CColors.white,
    borderRadius: 20,
    padding: 15,
    shadowColor: CColors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
  },
});
export default CCard2;
