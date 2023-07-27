import React, {useContext, useState} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';

import CColors from '../../color/CColors';
import CText from '../text/CText';
import CStrings from '../../strings/CStrings';
import CIcon from '../icon/CIcon';
import CTextInput from '../input_text/CInputText';
import styles from './style';
import {AppContext} from '../../context/CContext';

function CDropDownWithTextInputandText(props) {
  //varibale
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const {setDropDrownListValue} = useContext(AppContext);

  //when any value selected from drop down,this function will be call
  const itemSelected = item => {
    setDropDrownListValue(item);
    console.log(`item is ${item}`);
    setSelectedValue(item);
    setIsOpen(false);
  };
  ////

  //when user write something in the input
  const inputText = text => {
    console.log(`text = ${text}`);
    setSelectedValue(text);
    setDropDrownListValue(text);
  };

  //

  //drop down template
  const itemTemplate = item => (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => itemSelected(item.item.value)}>
      <CText text={item.item.value} style={styles.text} />
    </TouchableOpacity>
  );

  //

  //main view start
  return (
    <View style={{paddingVertical: 10}}>
      <CText text={CStrings.office_location} style={styles.text} />
      <View style={[styles.container, {...props.containerStyle}]}>
        <CTextInput
          ContainerStyle={{width: '90%'}}
          placeholder={CStrings.area}
          defaultValue={selectedValue}
          keyboardType="default"
          onChangeText={inputText}
        />
        <CIcon
          iconName={isOpen ? 'caretup' : 'caretdown'}
          iconType="antdesign"
          iconColor={CColors.black}
          iconSize={20}
          onPress={() => setIsOpen(!isOpen)}
        />
      </View>
      {isOpen ? (
        <View style={styles.itemContainer}>
          <FlatList
            data={props.data}
            keyExtractor={item => item.id}
            renderItem={itemTemplate}
          />
        </View>
      ) : null}
    </View>
  );
}

export default CDropDownWithTextInputandText;
