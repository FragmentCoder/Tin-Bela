import React, {useState} from 'react';
import {View} from 'react-native';
import styles from './style';
import CStrings from '../../strings/CStrings';
import CHeader from '../../components/header/CHeader';
import CItemCard from '../../components/item_card/CItemCard';
import CText from '../../components/text/CText';

import CGradiantButton from '../../components/gradiant_button/CGradiantButton';

function AccountType(props) {
  //hooks

  const [account_type_state, set_account_type_state] =
    useState('cataring_reciver');

  //functions
  const cataring_povider_function = () => {
    set_account_type_state('cataring_povider');
  };

  const cataring_reciver_function = () => {
    set_account_type_state('cataring_reciver');
  };

  const food_court_function = () => {
    set_account_type_state('food_court');
  };

  const nextButton = () => {
    console.log(`nextButton`);
    props.navigation.navigate('account_settings');
  };

  return (
    <CHeader barStyle="light-content" iconSize={0}>
      <View style={styles.textContainer}>
        <CText text={CStrings.account_type} style={{fontSize: 20}} />
      </View>
      <View style={styles.itemContainerDiv}>
        <CItemCard
          headerText={CStrings.cataring_povider}
          titleText={CStrings.cataring_povider_title}
          checked={account_type_state === 'cataring_povider'}
          onPress={cataring_povider_function}
        />
        <CItemCard
          headerText={CStrings.cataring_reciver}
          titleText={CStrings.cataring_reciver_title}
          checked={account_type_state === 'cataring_reciver'}
          onPress={cataring_reciver_function}
        />
        <CItemCard
          headerText={CStrings.food_court}
          titleText={CStrings.food_court_title}
          checked={account_type_state === 'food_court'}
          onPress={food_court_function}
        />
      </View>

      <View style={styles.buttonContainer}>
        <CGradiantButton
          containerStyle={{height: '50%'}}
          text={CStrings.next_button_title}
          onPress={nextButton}
        />
      </View>
    </CHeader>
  );
}
export default AccountType;
