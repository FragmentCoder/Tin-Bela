import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import styles from './style';

import CStrings from '../../strings/CStrings';
import CheckBoxWithText from '../check_box_with_text/CheckBoxWithText';

function SevenDaySelect(props) {
  const defultData = [
    {
      key: 1,
      day: CStrings.saturday,
      selected: false,
    },
    {
      key: 2,
      day: CStrings.sunday,
      selected: false,
    },
    {
      key: 3,
      day: CStrings.monday,
      selected: false,
    },
    {
      key: 4,
      day: CStrings.tuesday,
      selected: false,
    },
    {
      key: 5,
      day: CStrings.wednesday,
      selected: false,
    },
    {
      key: 6,
      day: CStrings.thursday,
      selected: false,
    },
  ];
  const [data, setData] = useState(defultData);
  const day = ind => {
    const arr = data.map((item, index) => {
      if (ind == index) {
        console.log(`opkkk`);
        return {
          ...item,
          selected: !item.selected,
        };
      }
      return {
        ...item,
      };
    });
    setData(arr);
  };
  const renderComponent = ({item, index}) => {
    return (
      <View style={{flex: 1, alignItems: 'stretch'}}>
        <CheckBoxWithText
          title={item.day}
          checked={item.selected}
          onPress={() => day(index)}
          iconSize={props.iconSize}
          fontSize={props.fontSize}
        />
      </View>
    );
  };
  return (
    <View style={styles.checkBox}>
      <FlatList
        data={data}
        renderItem={renderComponent}
        keyExtractor={item => item.key}
        numColumns={2}
      />
    </View>
  );
}
export default SevenDaySelect;
