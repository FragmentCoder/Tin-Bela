import React from 'react';
import {View} from 'react-native';
import styles from './style';
import CButton from '../button/CButton';
import GradiantColor from '../gradiant_color/GradiantColor';
import CText from '../text/CText';
import CColors from '../../color/CColors';
import CIcon from '../icon/CIcon';
import CHeader from '../header/CHeader';
import CStrings from '../../strings/CStrings';

function Onboarding(props) {
  return (
    <CHeader
      barStyle={CStrings.light_bar_style}
      iconSize={0}
      containerStyle={{padding: 0}}>
      <View style={styles.button}>
        <CButton text="English" onPress={props.translateToEnglishButton} />
      </View>
      <View style={styles.firstDiv}>{props.children}</View>
      <View style={styles.secondDiv}>
        <GradiantColor>
          <View style={styles.secondDiv01}>
            <CText
              text={props.title}
              style={{
                color: CColors.white,
                textAlign: 'center',
                fontSize: 22,
              }}
            />
          </View>
          <View style={styles.secondDiv02}>
            <View style={styles.iconDiv}>
              <CIcon
                iconName={'controller-record'}
                iconType={'entypo'}
                iconColor={props.iconColor1}
                iconSize={20}
                containerStyle={props.containerStyle}
              />
              <CIcon
                iconName={'controller-record'}
                iconType={'entypo'}
                iconColor={props.iconColor2}
                iconSize={20}
                containerStyle={props.containerStyle}
              />
              <CIcon
                iconName={'controller-record'}
                iconType={'entypo'}
                iconColor={props.iconColor3}
                iconSize={20}
                containerStyle={props.containerStyle}
              />
            </View>
          </View>
          <View style={styles.secondDiv03}>
            <CButton
              text={props.buttonTitle}
              buttonStyles={styles.buttonStyles}
              textStyles={styles.textStyles(18)}
              onPress={props.startWithNumberButton}
            />
          </View>
        </GradiantColor>
      </View>
    </CHeader>
  );
}
export default Onboarding;
