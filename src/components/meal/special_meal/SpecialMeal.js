import React, {useState} from 'react';
import {View, FlatList, Image, Modal} from 'react-native';
import styles from './style';
import CText from '../../../components/text/CText';
import CColors from '../../../color/CColors';
import CStrings from '../../../strings/CStrings';
import CIcon from '../../icon/CIcon';
import CCheckBox from '../../check_box/CCheckBox';
import CCounting from '../../counting/CCounting';

function specilaMeal(props) {
  const [itemSelected, setItemSelected] = useState('খিচুড়ি');

  const special_food = [
    {
      key: 111,
      image: require('../../../../assets/images/food_1.png'),
      name: 'তেহারি',
      price: '১০০ টাকা',
      isSelected: false,
    },
    {
      key: 112,
      image: require('../../../../assets/images/food_2.png'),
      name: 'খিচুড়ি',
      price: '১০০ টাকা',
      isSelected: false,
    },
    {
      key: 113,
      image: require('../../../../assets/images/food_3.png'),
      name: 'গরু',
      price: '১০০ টাকা',
      isSelected: false,
    },
    {
      key: 114,
      image: require('../../../../assets/images/food_4.png'),
      name: 'ভাজি',
      price: '১০০ টাকা',
      isSelected: false,
    },
  ];

  const selectedItem = name => {
    setItemSelected(name);
  };
  const card = item => {
    return (
      <View style={styles.card}>
        <View style={{flex: 1.3}}>
          <Image
            source={item.item.image}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.midDiv}>
          <CText text={item.item.name} style={{fontSize: 18}} />
          <CText text={item.item.price} style={{color: CColors.green}} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <CCounting />
          </View>
        </View>
        <View style={{flex: 0.5}}>
          <CCheckBox
            checkIconSize={30}
            checkcontainerStyle={styles.icon}
            containerStyle={styles.icon}
            checked={itemSelected == item.item.name}
            onPress={() => selectedItem(item.item.name)}
          />
        </View>
      </View>
    );
  };

  //main ui start from here
  return (
    <View style={{height: '100%'}}>
      <CText
        text={CStrings.special_meal}
        style={{marginBottom: 10, fontSize: 16}}
      />
      <CText
        text={CStrings.special_meal_details}
        style={{marginBottom: 20, color: CColors.gray}}
      />
      <FlatList data={special_food} renderItem={card} />
    </View>
  );
}
export default specilaMeal;
