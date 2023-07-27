import React from 'react';
import {Image} from 'react-native';
import Onboarding from '../../components/onboarding/Onboarding';
import CColors from '../../color/CColors';
import CStrings from '../../strings/CStrings';
function Onboarding_01(props) {
  const startWithNumberButton = () => {
    console.log('StartWithNumber Button Press');
    props.navigation.navigate('login');
  };
  const translateToEnglishButton = () => {
    console.log('translateToEnglish Button Press');
  };
  return (
    <Onboarding
      iconColor1={CColors.light_green}
      iconColor2={CColors.light_green}
      iconColor3={CColors.white}
      title={''}
      buttonTitle={CStrings.start_by_your_mobile_number}
      startWithNumberButton={startWithNumberButton}
      translateToEnglishButton={translateToEnglishButton}>
      <Image source={require('../../../assets/images/onboarding_03.png')} />
    </Onboarding>
  );
}
export default Onboarding_01;
