import React from 'react';
import {View} from 'react-native';
import styles from './style';
import CText from '../../components/text/CText';
import CColors from '../../color/CColors';
import CHeader from '../../components/header/CHeader';
import CStrings from '../../strings/CStrings';
import SevenDay from '../../components/seven_day/SevenDayPlan';
import CButton from '../../components/button/CButton';

function WeeklyMealPlan() {
  const saveButton = () => {
    console.log(`save Button is press`);
  };
  return (
    <CHeader title={CStrings.weekly_meal_plan_make}>
      <View style={{flex: 1}}>
        <CText text={CStrings.date_demo} style={styles.date} />
        <CText text={CStrings.make_meal_plan_by_day} style={styles.text} />
      </View>
      <View style={{flex: 7}}>
        <SevenDay />
      </View>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <CButton
          text={CStrings.save}
          textStyles={{fontSize: 20, color: CColors.white}}
          buttonStyles={{borderRadius: 50}}
          onPress={saveButton}
        />
      </View>
    </CHeader>
  );
}
export default WeeklyMealPlan;
