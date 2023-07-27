import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import styles from './style';

import CText from '../../components/text/CText';
import CHeader from '../../components/header/CHeader';
function Splash(props) {
  useEffect(() => {
    setTimeout(() => props.navigation.navigate('onboarding_01'), 3000), [];
  });
  return (
    <CHeader
      barStyle="light-content"
      iconSize={0}
      containerStyle={{padding: 0}}>
      <View style={styles.firstDiv}>
        <CText text="তিনবেলা" style={styles.text} />
      </View>
      <View style={styles.secondDiv}>
        <Image
          source={require('../../../assets/images/welcome.png')}
          style={{width: '100%', height: '100%'}}
        />
      </View>
    </CHeader>
  );
}
export default Splash;
