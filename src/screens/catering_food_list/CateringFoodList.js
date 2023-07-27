import React, {useContext, useState} from 'react';
import {Animated, Modal, ScrollView, View} from 'react-native';
import styles from './style';

import CHeader from '../../components/header/CHeader';
import CStrings from '../../strings/CStrings';
import CButton from '../../components/button/CButton';
import RegularMeal from '../../components/meal/regular_meal/RegularMeal';
import SpecialMeal from '../../components/meal/special_meal/SpecialMeal';

import CText from '../../components/text/CText';
import CColors from '../../color/CColors';
import CIcon from '../../components/icon/CIcon';

import SevenDaySelect from '../../components/seven_day/SevenDaySelect';
import CModla from '../../components/modal/CModal';
import CCounting from '../../components/counting/CCounting';
import {AppContext} from '../../context/CContext';

function CateringFoodList(props) {
  const [activeButton, setActiveButton] = useState(CStrings.regular_meal);
  const [modalVisible, setModalVisible] = useState(false);
  const [openModeFirstDiv, setOpenModeFirstDiv] = useState(false);
  const [openModeSecondDiv, setOpenModeSecondDiv] = useState(false);
  const {setAccountStatus} = useContext(AppContext);

  const defultPosition = useState(new Animated.ValueXY({x: 0, y: 0}))[0];
  const rightPosition = useState(new Animated.ValueXY({x: 100, y: 0}))[0]; //same potion x: 0, y: -372

  //array
  const regularFood = [
    {
      key: 11,
      image: require('../../../assets/images/food_1.png'),
      name: 'ডিম',
      isSelected: false,
    },
    {
      key: 12,
      image: require('../../../assets/images/food_2.png'),
      name: 'মুরগি',
      isSelected: false,
    },
    {
      key: 13,
      image: require('../../../assets/images/food_3.png'),
      name: 'গরু',
      isSelected: true,
    },
    {
      key: 14,
      image: require('../../../assets/images/food_4.png'),
      name: 'রুই মাছ',
      isSelected: false,
    },
  ];
  const extraFood = [
    {
      key: 111,
      image: require('../../../assets/images/food_5.png'),
      name: 'আলু ভর্তা',
      isSelected: false,
    },
    {
      key: 112,
      image: require('../../../assets/images/food_6.png'),
      name: 'আলু ভাজি',
      isSelected: false,
    },
    {
      key: 113,
      image: require('../../../assets/images/food_7.png'),
      name: 'লাল শাক',
      isSelected: true,
    },
    {
      key: 114,
      image: require('../../../assets/images/food_8.png'),
      name: 'পুই শাক',
      isSelected: false,
    },
  ];

  //function
  const saveMeal = () => {
    console.log(`saveMeal`);
    setModalVisible(true);
  };
  const modalPress = () => {
    console.log(`modal is Press`);
    setModalVisible(false);
  };
  const openDetails = () => {
    console.log(`openDetails`);
  };
  const regularMealFuction = () => {
    setActiveButton(CStrings.regular_meal);

    //animation start
    Animated.timing(defultPosition, {
      toValue: {x: 0, y: 0},
      duration: 1000,
      useNativeDriver: false,
    }).start();
    Animated.timing(rightPosition, {
      toValue: {x: 300, y: 0},
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };
  const specilaMealFunction = () => {
    setActiveButton(CStrings.special_meal);

    //animation start
    Animated.timing(defultPosition, {
      toValue: {x: -400, y: 0},
      duration: 1000,
      useNativeDriver: false,
    }).start();
    Animated.timing(rightPosition, {
      toValue: {x: -310, y: 0},
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };
  //go to home page & save all data
  const goAhead = () => {
    console.log(`goAhead`);
    setAccountStatus(CStrings.home);
    props.navigation.navigate('home');
  };
  const ModalView = props => {
    return (
      <View style={styles.modelHero}>
        <View style={styles.modalDiv}>
          <View style={{flex: 8}}>
            <CText text={props.text} />
          </View>
          <View style={{flex: 2}}>
            <CIcon
              iconName={props.iconValue ? 'caret-up' : 'caret-down'}
              iconColor={CColors.black}
              iconSize={50}
              onPress={props.iconPress}
            />
          </View>
        </View>
        {props.iconValue ? props.component : ''}
      </View>
    );
  };
  return (
    <CHeader title={CStrings.account_settings}>
      <CModla
        visible={modalVisible}
        onPress={modalPress}
        saveButton={goAhead}
        cancelButton={() => setModalVisible(false)}
        offTheModal={() => setModalVisible(false)}>
        <ModalView
          text={CStrings.i_want_this_plan_for_other_day}
          iconValue={openModeFirstDiv}
          iconPress={() => setOpenModeFirstDiv(!openModeFirstDiv)}
          component={<SevenDaySelect />}
        />
        <ModalView
          text={CStrings.i_want_this_food_for_more_contity}
          iconValue={openModeSecondDiv}
          iconPress={() => setOpenModeSecondDiv(!openModeSecondDiv)}
          component={
            <CCounting
              containerStyle={styles.countingContainer}
              iconSize={35}
              fontSize={25}
            />
          }
        />
      </CModla>

      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <CButton
            text={CStrings.regular_meal}
            buttonStyles={
              activeButton == CStrings.regular_meal
                ? styles.selectedButton
                : styles.button
            }
            textStyles={
              activeButton == CStrings.regular_meal
                ? styles.selectedButtonText
                : styles.buttonText
            }
            onPress={regularMealFuction}
          />
          <CButton
            text={CStrings.special_meal}
            buttonStyles={
              activeButton == CStrings.special_meal
                ? styles.selectedButton
                : styles.button
            }
            textStyles={
              activeButton == CStrings.special_meal
                ? styles.selectedButtonText
                : styles.buttonText
            }
            onPress={specilaMealFunction}
          />
        </View>
        <View style={styles.itemContainer}>
          <Animated.View style={defultPosition.getLayout()}>
            <ScrollView>
              <RegularMeal
                title={CStrings.main_food}
                data={regularFood}
                defultSelected={'মুরগি'}
              />
              <View style={{marginTop: 20}} />
              <RegularMeal
                title={CStrings.extra_menu}
                data={extraFood}
                defultSelected={'মুরগি'}
              />
            </ScrollView>
          </Animated.View>
          <Animated.View style={rightPosition.getLayout()}>
            <SpecialMeal />
          </Animated.View>
        </View>
        <View style={{flex: 1}}>
          <CButton
            text={CStrings.save}
            textStyles={{fontSize: 20, color: CColors.white}}
            buttonStyles={{borderRadius: 10}}
            onPress={saveMeal}
          />
        </View>
      </View>
    </CHeader>
  );
}
export default CateringFoodList;
