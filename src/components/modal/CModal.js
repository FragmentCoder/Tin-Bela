import React from 'react';
import {View, StatusBar, StyleSheet, TouchableOpacity} from 'react-native';
import CButton from '../button/CButton';
import CStrings from '../../strings/CStrings';
import CColors from '../../color/CColors';
import Modal from 'react-native-modal';
import * as Animatable from 'react-native-animatable';

function CModla(props) {
  return (
    <Modal
      isVisible={props.visible}
      animationIn={props.animationIn}
      animationOut={props.animationOut}
      animationInTiming={props.animationInTiming}
      animationOutTiming={props.animationOutTiming}
      backdropOpacity={0.2}
      style={{margin: 0}}>
      <StatusBar backgroundColor={CColors.light_black} />
      <TouchableOpacity
        style={styles.model}
        activeOpacity={2}
        onPress={props.offTheModal}>
        <Animatable.View style={{width: '90%'}} animation={props.viewAnimation}>
          {props.children}
        </Animatable.View>
        <Animatable.View
          style={[styles.buttonContainer, {...props.buttonContainerStyle}]}
          animation={props.viewAnimation}>
          <CButton
            buttonStyles={{
              width: props.buttonWidth,
              backgroundColor: props.saveButtonBackgroundColor,
              marginBottom: props.buttonMarginBottom,
              borderRadius: props.buttonBorderRadius,
            }}
            text={props.saveText}
            textStyles={styles.buttonText}
            onPress={props.saveButton}
          />
          <CButton
            buttonStyles={{
              width: props.buttonWidth,
              backgroundColor: props.cancelButtonBackgroundColor,
              borderRadius: props.buttonBorderRadius,
            }}
            text={props.cancelText}
            textStyles={styles.buttonText}
            onPress={props.cancelButton}
          />
        </Animatable.View>
      </TouchableOpacity>
    </Modal>
  );
}
const styles = StyleSheet.create({
  model: {
    backgroundColor: CColors.light_black,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  /*   modelHero: {
    backgroundColor: CColors.red,
    marginBottom: 30,
    borderRadius: 15,
    paddingVertical: 25,
  }, */
  modalDiv: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    /*  position: 'absolute',
    bottom: 15, */
  },

  buttonText: {fontSize: 20, color: CColors.white},
});
CModla.defaultProps = {
  saveText: CStrings.go_ahead,
  cancelText: CStrings.cancel,
  saveButtonBackgroundColor: CColors.green,
  cancelButtonBackgroundColor: CColors.orange,
  buttonWidth: '45%',
  buttonBorderRadius: 10,
  animationIn: 'fadeIn',
  animationOut: 'fadeOut',
  animationInTiming: 300,
  animationOutTiming: 100,
  viewAnimation: 'bounceInRight',
};
export default CModla;
