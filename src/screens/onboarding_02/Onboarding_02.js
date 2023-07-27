import React from 'react';
import {Image} from 'react-native';
import Onboarding from '../../components/onboarding/Onboarding';
import CColors from '../../color/CColors';
import CStrings from '../../strings/CStrings';
function Onboarding_01(props) {
  const startWithNumberButton = () => {
    console.log('StartWithNumber Button Press');
    props.navigation.navigate('onboarding_03');
  };
  const translateToEnglishButton = () => {
    console.log('translateToEnglish Button Press');
  };
  return (
    <Onboarding
      iconColor1={CColors.light_green}
      iconColor2={CColors.white}
      iconColor3={CColors.light_green}
      title={CStrings.weekly_meal_plan_make}
      buttonTitle={CStrings.next_button_title}
      startWithNumberButton={startWithNumberButton}
      translateToEnglishButton={translateToEnglishButton}>
      <Image source={require('../../../assets/images/onboarding_02.png')} />
    </Onboarding>
  );
}
export default Onboarding_01;
