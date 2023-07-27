import React, {useState} from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

import CText from '../../components/text/CText';
import CColors from '../../color/CColors';
import CIcon from '../icon/CIcon';

function CDropDown(props) {
  const [value, setValue] = useState(props.placeholder);
  const [isOpen, setIsOpen] = useState(false);

  //function
  const render = item => (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.render}
      onPress={() => {
        setValue(item.item);
      }}>
      <CText text={item.item} />
    </TouchableOpacity>
  );
  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row'}}>
        <View style={[styles.border, {flex: 8}]}>
          <CText text={value} style={styles.text} />
        </View>
        <View style={[styles.border, {flex: 1}]}>
          <CIcon
            iconName={isOpen ? 'caretup' : 'caretdown'}
            iconType="antdesign"
            iconColor={CColors.black}
            iconSize={20}
            onPress={() => setIsOpen(!isOpen)}
          />
        </View>
      </View>
      {isOpen ? (
        <FlatList
          data={props.data}
          keyExtractor={(item, index) => index}
          renderItem={render}
        />
      ) : (
        ''
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  border: {
    borderBottomColor: CColors.black,
    borderBottomWidth: 0.5,
  },
  text: {
    color: CColors.black,
    paddingBottom: 15,
    paddingLeft: 5,
  },
  render: {
    flex: 1,
    borderWidth: 0.5,
    borderBottomColor: CColors.black,
    padding: 10,
  },
});
export default CDropDown;
