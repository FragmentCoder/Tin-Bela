import React, {useContext, useState} from 'react';
import {View, FlatList, Image} from 'react-native';
import styles from './style';
import CText from '../../components/text/CText';
import CColors from '../../color/CColors';
import CHeader from '../../components/header/CHeader';
import CStrings from '../../strings/CStrings';
import CCheckBox from '../../components/check_box/CCheckBox';
import {AppContext} from '../../context/CContext';

function DayMealPlan() {
  const {data} = useContext(AppContext);
  const [catering, setCatering] = useState(data[0].catering);

  //function
  const selectedCataring = catering => {
    setCatering(catering);
  };

  const MiniDetails = props => {
    return (
      <View style={{flexDirection: 'row', marginVertical: 5}}>
        <CText
          text={props.header}
          style={{color: CColors.gray, fontSize: 14}}
        />
        <CText
          text={props.title}
          style={{color: CColors.black, fontSize: 13}}
        />
      </View>
    );
  };

  //
  const card = item => {
    return (
      <View style={styles.container}>
        <View style={styles.firstContainer}>
          <View style={styles.imageContainer}>
            <Image source={item.item.profile_image} style={styles.image} />
          </View>
          <View style={styles.headerTextContainer}>
            <CText
              text={item.item.catering}
              style={{fontSize: 18, color: CColors.black}}
            />
            <CText text={item.item.location} style={{color: CColors.gray}} />
          </View>
          <View style={styles.checkBoxContainer}>
            <CCheckBox
              checkIconSize={30}
              checkcontainerStyle={styles.icon}
              containerStyle={styles.icon}
              checked={catering === item.item.catering}
              onPress={selectedCataring(item.item.catering)}
            />
            <CText text={item.item.taka} />
          </View>
        </View>
        <View style={styles.secondContainer}>
          <View style={{flex: 1}}>
            <MiniDetails
              header={CStrings.capacity}
              title={item.item.capacity}
            />
            <MiniDetails
              header={CStrings.menu_item}
              title={item.item.menu_item}
            />
          </View>

          <View style={{flex: 1.4}}>
            <MiniDetails
              header={CStrings.delivery_time}
              title={item.item.delivery_time}
            />
            <MiniDetails
              header={CStrings.special_food}
              title={item.item.special_food}
            />
          </View>
        </View>
        <View style={styles.thirdContainer}>
          {item.item.food_image.map((obj, index) => {
            if (index > 3) {
              return;
            } else {
              return (
                <Image
                  source={obj.image}
                  style={styles.foodImage}
                  resizeMode="contain"
                />
              );
            }
          })}
        </View>
        <View style={styles.lastContainer}>
          {item.item.safe_food_verify ? (
            <View style={styles.imageText}>
              <Image source={require('../../../assets/images/safe_food.png')} />
              <CText
                text={CStrings.safe_food_verify}
                style={{color: CColors.black, fontSize: 12, marginLeft: 5}}
              />
            </View>
          ) : (
            <View style={styles.imageText}></View>
          )}
          <View
            style={[
              styles.imageText,
              {justifyContent: 'flex-end', marginRight: 20},
            ]}>
            <CIcon
              iconName="filetext1"
              iconType="antdesign"
              iconColor={CColors.gray}
              iconSize={20}
            />
            <CText
              text={CStrings.food_menu}
              style={{color: CColors.gray, fontSize: 12, marginLeft: 2}}
            />
          </View>
        </View>
      </View>
    );
  };
  return (
    <CHeader title={CStrings.saturday_meal_plan}>
      <View>
        <CText
          text={CStrings.select_your_desire_catering}
          style={{color: CColors.black, fontSize: 17}}
        />
        <View style={{marginBottom: 50}}>
          <FlatList
            data={data}
            renderItem={card}
            keyExtractor={item => item.key}
          />
        </View>
      </View>
    </CHeader>
  );
}
export default DayMealPlan;
