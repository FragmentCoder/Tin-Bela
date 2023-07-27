import React, {useState} from 'react';
import {View, FlatList, Image, TouchableOpacity} from 'react-native';
import CText from '../../../components/text/CText';
import CCheckBox from '../../check_box/CCheckBox';
import styles from './style';
import CColors from '../../../color/CColors';

function RegularMeal(props) {
  const [itemSelected, setItemSelected] = useState(props.defultSelected);

  const changeItem = name => {
    setItemSelected(name);
  };

  const card = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.foodContainer}
        activeOpacity={props.activeOpacity}
        onPress={() => changeItem(item.name)}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.checkboxContainer}>
          <CText text={item.name} style={{fontSize: 16}} />
          <CCheckBox
            checkIconSize={props.checkIconSize}
            checkcontainerStyle={styles.icon}
            containerStyle={styles.icon}
            checked={itemSelected == item.name}
            onPress={() => changeItem(item.name)}
          />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <CText
        text={props.title}
        style={{marginBottom: 20, fontSize: 16, color: CColors.gray}}
      />
      <FlatList
        numColumns={2}
        data={props.data}
        renderItem={card}
        keyExtractor={item => item.key}
        ListHeaderComponent={props.ListHeaderComponent}
        ListFooterComponent={props.ListFooterComponent}
        ListEmptyComponent={props.ListEmptyComponent}
      />
    </View>
  );
}
RegularMeal.defaultProps = {
  checkIconSize: 30,
  activeOpacity: 0.8,
};
export default RegularMeal;
