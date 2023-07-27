import React from 'react';
import {View, Image, FlatList} from 'react-native';
import styles from './style';
import CText from '../../components/text/CText';
import CColors from '../../color/CColors';
import CStrings from '../../strings/CStrings';
import CCheckBox from '../check_box/CCheckBox';
import CButton from '../button/CButton';

function CCard(props) {
  const ListEmptyComponent = () => (
    <View style={styles.emptyComponent}>
      <CText text={CStrings.nothing_in_here} style={{color: CColors.gray}} />
    </View>
  );

  const button = () => (
    <View>
      <CButton
        text={
          props.today == props.selectedDay
            ? CStrings.feedback
            : CStrings.off_the_meal
        }
        buttonStyles={styles.buttonStyles}
        textStyles={styles.buttonTextStyles}
        onPress={
          props.today == props.selectedDay
            ? props.feedbackPress
            : props.offTheMealPress
        }
      />
    </View>
  );

  const renderItem = ({item}) => {
    let regularFoodCount = 0;
    let extraFoodCount = 0;
    let specialFoodCount = 0;
    if (props.selectedDay == item.day) {
      return (
        <View>
          <View>
            <View style={styles.headerTextContainer}>
              <CText text={CStrings.regular_meal} style={styles.itemText} />
              <CText
                text={item.cateringDetails.name}
                style={{color: CColors.gray}}
              />
            </View>
            <View style={styles.itemContainer}>
              {item.regularFood.map((item2, index2) => {
                if (item2.isSelected) {
                  regularFoodCount = 1;
                  return (
                    <View style={styles.cardConatiner}>
                      <Image source={item2.image} style={styles.image} />
                      <CText text={item2.name} style={styles.text} />
                    </View>
                  );
                } else {
                  if (
                    item.regularFood.length == index2 + 1 &&
                    regularFoodCount == 0
                  ) {
                    return <ListEmptyComponent />;
                  } else {
                    return null;
                  }
                }
              })}
            </View>
          </View>
          <View>
            <View style={styles.headerTextContainer}>
              <CText text={CStrings.extra_menu} style={styles.itemText} />
              <CText
                text={item.cateringDetails.name}
                style={{color: CColors.gray}}
              />
            </View>

            <View style={styles.itemContainer}>
              {item.extraFood.map((item2, index2) => {
                if (item2.isSelected) {
                  extraFoodCount = 1;
                  return (
                    <View style={styles.cardConatiner}>
                      <Image source={item2.image} style={styles.image} />
                      <CText text={item2.name} style={styles.text} />
                    </View>
                  );
                } else {
                  if (
                    item.extraFood.length == index2 + 1 &&
                    extraFoodCount == 0
                  ) {
                    return <ListEmptyComponent />;
                  } else {
                    return null;
                  }
                }
              })}
            </View>
          </View>
          <View>
            <View style={styles.headerTextContainer}>
              <CText text={CStrings.special_food} style={styles.itemText} />
              <CText
                text={item.cateringDetails.name}
                style={{color: CColors.gray}}
              />
            </View>
            <View style={styles.itemContainer}>
              {item.specialFood.map((item2, index2) => {
                if (item2.isSelected) {
                  specialFoodCount = 1;
                  return (
                    <View style={styles.cardConatiner}>
                      <Image source={item2.image} style={styles.image} />
                      <CText text={item2.name} style={styles.text} />
                    </View>
                  );
                } else {
                  if (
                    item.specialFood.length == index2 + 1 &&
                    specialFoodCount == 0
                  ) {
                    return <ListEmptyComponent />;
                  } else {
                    return null;
                  }
                }
              })}
            </View>
          </View>
        </View>
      );
    } else {
      return null;
    }
  };
  return (
    <View>
      <FlatList
        data={props.data}
        keyExtractor={(item, index) => index}
        renderItem={renderItem}
        ListFooterComponent={button}
      />
    </View>
  );
}
export default CCard;
