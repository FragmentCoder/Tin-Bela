import React, {useEffect} from 'react';
import {View, Image} from 'react-native';

import CText from '../../components/text/CText';
import CStrings from '../../strings/CStrings';
import CColors from '../../color/CColors';
import CHeader from '../../components/header/CHeader';

/* 



                                Account Created Successfully




*/

function Successfully(props) {
  useEffect(() => {
    setTimeout(() => props.navigation.navigate('account_type'), 1000), [];
  });
  return (
    <CHeader barStyle="light-content" iconSize={0}>
      <CText
        text={CStrings.account_success}
        style={{color: CColors.black, fontSize: 18}}
      />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <Image
          source={require('../../../assets/images/successfull.png')}
          style={{height: '40%', width: '40%'}}
          resizeMode="contain"
        />
      </View>
    </CHeader>
  );
}
export default Successfully;
