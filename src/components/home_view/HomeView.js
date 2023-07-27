import React, {useContext, useEffect, useState} from 'react';
import {FlatList, View, Image, useWindowDimensions} from 'react-native';
import styles from './style';
import CText from '../../components/text/CText';
import CColors from '../../color/CColors';
import CStrings from '../../strings/CStrings';
import {AppContext} from '../../context/CContext';
import CIcon from '../icon/CIcon';
import CModla from '../modal/CModal';
import CCard from '../card/CCard';
import CCheckBox from '../check_box/CCheckBox';
import RatingWithText from '../rating_with_text/RatingWithText';
import CInputTextWithText from '../input_text_with_text/CInputTextWithText';
import SwitchToggle from 'react-native-switch-toggle';
import SevenDaySelect from '../seven_day/SevenDaySelect';

function HomeView() {
  const {menualSelectedDay, todayDate} = useContext(AppContext);
  const {height, width} = useWindowDimensions();
  const [openMealEditModal, setOpenMealEditModal] = useState(false);
  const [openFeedBackModal, setOpenFeedBackModal] = useState(false);
  const [openMealOffModal, setOpenMealOffModal] = useState(false);
  const [openOtherDayMealOffModal, setOpenOtherDayMealOffModal] =
    useState(false);

  const [totalRating, setTotalRating] = useState(0);
  const [testRating, setTestRating] = useState(0);
  const [saltRating, setSaltRating] = useState(0);
  const [oilRating, setOilRating] = useState(0);
  const [badTestRating, setBadTestRating] = useState(0);
  const [comment, setComment] = useState('');

  const [isRegularMealEnabled, setIsRegularMealEnabled] = useState(true);
  const [isExtraMealEnabled, setIsExtraMealEnabled] = useState(true);
  const [isSpecialMealEnabled, setIsSpecialMealEnabled] = useState(true);

  const [foodArray, setFoodArray] = useState([
    {
      key: 1,
      day: CStrings.saturday,
      cateringDetails: {
        name: 'মায়ের কেটারিং',
        address: 'বাড়ি নং ১১, রামপুরা, ঢাকা।',
        image: require('../../../assets/images/avater.png'),
      },
      totalPrices: CStrings.money_demo,
      regularFood: [
        {
          key: 21,
          image: require('../../../assets/images/food_1.png'),
          name: 'ডিম',
          isSelected: false,
        },
        {
          key: 22,
          image: require('../../../assets/images/food_2.png'),
          name: 'মুরগি',
          isSelected: false,
        },
        {
          key: 23,
          image: require('../../../assets/images/food_3.png'),
          name: 'গরু',
          isSelected: false,
        },
        {
          key: 24,
          image: require('../../../assets/images/food_4.png'),
          name: 'রুই মাছ',
          isSelected: false,
        },
      ],
      extraFood: [
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
      ],
      specialFood: [
        {
          key: 1112,
          image: require('../../../assets/images/food_2.png'),
          name: 'খিচুড়ি',
          price: '১০০ টাকা',
          isSelected: false,
        },
        {
          key: 1111,
          image: require('../../../assets/images/food_1.png'),
          name: 'তেহারি',
          price: '১০০ টাকা',
          isSelected: true,
        },
      ],
      regularFoodIsEnabled: true,
      extraFoodIsEnabled: true,
      specialFoodIsEnabled: true,
    },
    {
      key: 2,
      day: CStrings.sunday,
      cateringDetails: {
        name: 'মায়ের কেটারিং',
        address: 'বাড়ি নং ১১, রামপুরা, ঢাকা।',
        image: require('../../../assets/images/avater.png'),
      },
      totalPrices: CStrings.money_demo,
      regularFood: [
        {
          key: 21,
          image: require('../../../assets/images/food_1.png'),
          name: 'ডিম',
          isSelected: true,
        },
        {
          key: 22,
          image: require('../../../assets/images/food_2.png'),
          name: 'মুরগি',
          isSelected: true,
        },
        {
          key: 23,
          image: require('../../../assets/images/food_3.png'),
          name: 'গরু',
          isSelected: false,
        },
        {
          key: 24,
          image: require('../../../assets/images/food_4.png'),
          name: 'রুই মাছ',
          isSelected: true,
        },
      ],
      extraFood: [
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
      ],
      specialFood: [
        {
          key: 1112,
          image: require('../../../assets/images/food_2.png'),
          name: 'খিচুড়ি',
          price: '১০০ টাকা',
          isSelected: false,
        },
        {
          key: 1111,
          image: require('../../../assets/images/food_1.png'),
          name: 'তেহারি',
          price: '১০০ টাকা',
          isSelected: false,
        },
      ],
      regularFoodIsEnabled: true,
      extraFoodIsEnabled: true,
      specialFoodIsEnabled: true,
    },
    {
      key: 3,
      day: CStrings.monday,
      cateringDetails: {
        name: 'মায়ের কেটারিং',
        address: 'বাড়ি নং ১১, রামপুরা, ঢাকা।',
        image: require('../../../assets/images/avater.png'),
      },
      totalPrices: CStrings.money_demo,
      regularFood: [
        {
          key: 21,
          image: require('../../../assets/images/food_1.png'),
          name: 'ডিম',
          isSelected: false,
        },
        {
          key: 22,
          image: require('../../../assets/images/food_2.png'),
          name: 'মুরগি',
          isSelected: false,
        },
        {
          key: 23,
          image: require('../../../assets/images/food_3.png'),
          name: 'গরু',
          isSelected: false,
        },
        {
          key: 24,
          image: require('../../../assets/images/food_4.png'),
          name: 'রুই মাছ',
          isSelected: false,
        },
      ],
      extraFood: [
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
          isSelected: false,
        },
        {
          key: 114,
          image: require('../../../assets/images/food_8.png'),
          name: 'পুই শাক',
          isSelected: false,
        },
      ],
      specialFood: [
        {
          key: 1112,
          image: require('../../../assets/images/food_2.png'),
          name: 'খিচুড়ি',
          price: '১০০ টাকা',
          isSelected: false,
        },
        {
          key: 1111,
          image: require('../../../assets/images/food_1.png'),
          name: 'তেহারি',
          price: '১০০ টাকা',
          isSelected: true,
        },
      ],
      regularFoodIsEnabled: true,
      extraFoodIsEnabled: true,
      specialFoodIsEnabled: true,
    },
    {
      key: 4,
      day: CStrings.tuesday,
      cateringDetails: {
        name: 'মায়ের কেটারিং',
        address: 'বাড়ি নং ১১, রামপুরা, ঢাকা।',
        image: require('../../../assets/images/avater.png'),
      },
      totalPrices: CStrings.money_demo,
      regularFood: [
        {
          key: 21,
          image: require('../../../assets/images/food_1.png'),
          name: 'ডিম',
          isSelected: false,
        },
        {
          key: 22,
          image: require('../../../assets/images/food_2.png'),
          name: 'মুরগি',
          isSelected: true,
        },
        {
          key: 23,
          image: require('../../../assets/images/food_3.png'),
          name: 'গরু',
          isSelected: true,
        },
        {
          key: 24,
          image: require('../../../assets/images/food_4.png'),
          name: 'রুই মাছ',
          isSelected: false,
        },
      ],
      extraFood: [
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
      ],
      specialFood: [
        {
          key: 1112,
          image: require('../../../assets/images/food_2.png'),
          name: 'খিচুড়ি',
          price: '১০০ টাকা',
          isSelected: false,
        },
        {
          key: 1111,
          image: require('../../../assets/images/food_1.png'),
          name: 'তেহারি',
          price: '১০০ টাকা',
          isSelected: false,
        },
      ],
      regularFoodIsEnabled: true,
      extraFoodIsEnabled: true,
      specialFoodIsEnabled: true,
    },
    {
      key: 5,
      day: CStrings.wednesday,
      cateringDetails: {
        name: 'মায়ের কেটারিং',
        address: 'বাড়ি নং ১১, রামপুরা, ঢাকা।',
        image: require('../../../assets/images/avater.png'),
      },
      totalPrices: CStrings.money_demo,
      regularFood: [
        {
          key: 21,
          image: require('../../../assets/images/food_1.png'),
          name: 'ডিম',
          isSelected: true,
        },
        {
          key: 22,
          image: require('../../../assets/images/food_2.png'),
          name: 'মুরগি',
          isSelected: false,
        },
        {
          key: 23,
          image: require('../../../assets/images/food_3.png'),
          name: 'গরু',
          isSelected: false,
        },
        {
          key: 24,
          image: require('../../../assets/images/food_4.png'),
          name: 'রুই মাছ',
          isSelected: false,
        },
      ],
      extraFood: [
        {
          key: 111,
          image: require('../../../assets/images/food_5.png'),
          name: 'আলু ভর্তা',
          isSelected: true,
        },
        {
          key: 112,
          image: require('../../../assets/images/food_6.png'),
          name: 'আলু ভাজি',
          isSelected: true,
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
          isSelected: true,
        },
      ],
      specialFood: [
        {
          key: 1112,
          image: require('../../../assets/images/food_2.png'),
          name: 'খিচুড়ি',
          price: '১০০ টাকা',
          isSelected: false,
        },
        {
          key: 1111,
          image: require('../../../assets/images/food_1.png'),
          name: 'তেহারি',
          price: '১০০ টাকা',
          isSelected: false,
        },
      ],
      regularFoodIsEnabled: true,
      extraFoodIsEnabled: true,
      specialFoodIsEnabled: true,
    },
    {
      key: 6,
      day: CStrings.thursday,
      cateringDetails: {
        name: 'মায়ের কেটারিং',
        address: 'বাড়ি নং ১১, রামপুরা, ঢাকা।',
        image: require('../../../assets/images/avater.png'),
      },
      totalPrices: CStrings.money_demo,
      regularFood: [
        {
          key: 21,
          image: require('../../../assets/images/food_1.png'),
          name: 'ডিম',
          isSelected: true,
        },
        {
          key: 22,
          image: require('../../../assets/images/food_2.png'),
          name: 'মুরগি',
          isSelected: true,
        },
        {
          key: 23,
          image: require('../../../assets/images/food_3.png'),
          name: 'গরু',
          isSelected: false,
        },
        {
          key: 24,
          image: require('../../../assets/images/food_4.png'),
          name: 'রুই মাছ',
          isSelected: false,
        },
      ],
      extraFood: [
        {
          key: 111,
          image: require('../../../assets/images/food_5.png'),
          name: 'আলু ভর্তা',
          isSelected: true,
        },
        {
          key: 112,
          image: require('../../../assets/images/food_6.png'),
          name: 'আলু ভাজি',
          isSelected: true,
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
      ],
      specialFood: [
        {
          key: 1112,
          image: require('../../../assets/images/food_2.png'),
          name: 'খিচুড়ি',
          price: '১০০ টাকা',
          isSelected: true,
        },
        {
          key: 1111,
          image: require('../../../assets/images/food_1.png'),
          name: 'তেহারি',
          price: '১০০ টাকা',
          isSelected: false,
        },
      ],
      regularFoodIsEnabled: true,
      extraFoodIsEnabled: true,
      specialFoodIsEnabled: true,
    },
    {
      key: 7,
      day: CStrings.friday,
      cateringDetails: {
        name: 'মায়ের কেটারিং',
        address: 'বাড়ি নং ১১, রামপুরা, ঢাকা।',
        image: require('../../../assets/images/avater.png'),
      },
      totalPrices: CStrings.money_demo,
      regularFood: [
        {
          key: 21,
          image: require('../../../assets/images/food_1.png'),
          name: 'Friday',
          isSelected: true,
        },
        {
          key: 22,
          image: require('../../../assets/images/food_2.png'),
          name: 'মুরগি',
          isSelected: false,
        },
        {
          key: 23,
          image: require('../../../assets/images/food_3.png'),
          name: 'গরু',
          isSelected: false,
        },
        {
          key: 24,
          image: require('../../../assets/images/food_4.png'),
          name: 'রুই মাছ',
          isSelected: true,
        },
      ],
      extraFood: [
        {
          key: 111,
          image: require('../../../assets/images/food_5.png'),
          name: 'আলু ভর্তা',
          isSelected: true,
        },
        {
          key: 112,
          image: require('../../../assets/images/food_6.png'),
          name: 'আলু ভাজি',
          isSelected: true,
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
      ],
      specialFood: [
        {
          key: 1112,
          image: require('../../../assets/images/food_2.png'),
          name: 'খিচুড়ি',
          price: '১০০ টাকা',
          isSelected: true,
        },
        {
          key: 1111,
          image: require('../../../assets/images/food_1.png'),
          name: 'তেহারি',
          price: '১০০ টাকা',
          isSelected: false,
        },
      ],
      regularFoodIsEnabled: true,
      extraFoodIsEnabled: true,
      specialFoodIsEnabled: true,
    },
  ]);

  //array manipulation
  //split whole date into pices
  const splitFullDate = menualSelectedDay.split(' ');
  const splitFullDate2 = todayDate.split(' ');

  //first array is day
  const selectedDay = splitFullDate[0];
  const today = splitFullDate2[0];

  //find a object & store in tempRegularFoodArray
  const tempRegularFoodArray = foodArray.find(item => item.day === selectedDay);

  //in tempRegularFoodArray array we find a day array.now we have to make a new array for regularFood
  const regularFood = tempRegularFoodArray
    ? tempRegularFoodArray.regularFood
    : [];

  //in tempRegularFoodArray array we find a day array.now we have to make a new array for extraFood
  const extraFood = tempRegularFoodArray ? tempRegularFoodArray.extraFood : [];

  //in tempRegularFoodArray array we find a day array.now we have to make a new array for specialFood
  const specialFood = tempRegularFoodArray
    ? tempRegularFoodArray.specialFood
    : [];

  const iconHandeler = () => {
    console.log(`iconHandeler`);
    setOpenMealEditModal(!openMealEditModal);
  };

  const modalCancel = () => {
    console.log(`modalCancel`);
    setOpenMealEditModal(!openMealEditModal);
  };

  //change the total value of feedback
  useEffect(() => {
    const total = testRating + saltRating + oilRating - badTestRating;
    setTotalRating(total);
  }, [testRating, saltRating, oilRating, badTestRating]);

  const feedback = () => {
    console.log(`feedback`);
    setOpenFeedBackModal(true);
  };
  const offTheMeal = () => {
    console.log(`offTheMeal`);
    setOpenMealOffModal(true);
  };
  const ratingCompleted = number => {
    console.log(`rating is ${number}`);
  };
  const offTodayAllMeal = () => {
    console.log(`offTodayAllMeal`);
    setIsRegularMealEnabled(false);
    setIsExtraMealEnabled(false);
    setIsSpecialMealEnabled(false);
    /*     setTimeout(() => {
      setOpenMealOffModal(false);
      console.log(`in the timeing`);
    }, 1200); */
  };
  const offOtherDayMeal = () => {
    console.log(`offOtherDayMeal`);
    setOpenOtherDayMealOffModal(true);
    setOpenMealOffModal(false);
  };

  const saveOtherDayMealOff = () => {
    console.log(`saveOtherDayMealOff`);
    setOpenOtherDayMealOffModal(false);
  };

  const renderItem = ({item, index}) => (
    <View style={styles.renderItemContainer}>
      <View style={styles.renderItemCateringContainer}>
        <Image
          source={item.cateringDetails.image}
          style={styles.renderItemCateringImage}
        />
        <View>
          <CText
            text={item.cateringDetails.name}
            style={{color: CColors.black, fontSize: 18, marginBottom: 5}}
          />
          <CText
            text={item.cateringDetails.address}
            style={{color: CColors.gray}}
          />
        </View>
        <CText text={item.totalPrices} />
      </View>
      <View>
        <View>
          <CText text={CStrings.regular_meal} style={styles.listItemTitle} />
          <View style={styles.listItemContainer}>
            {item.regularFood.map(item2 => {
              return (
                <View style={styles.listItemCheckboxContainer}>
                  <CCheckBox
                    title={item2.name}
                    checkIconSize={20}
                    checkcontainerStyle={{marginRight: 0}}
                    checked={item2.isSelected}
                  />
                </View>
              );
            })}
          </View>
        </View>
        <CText text={CStrings.extra_menu} style={styles.listItemTitle} />
        <View style={styles.listItemContainer}>
          {item.extraFood.map(item2 => {
            return (
              <View style={styles.listItemCheckboxContainer}>
                <CCheckBox
                  title={item2.name}
                  checkIconSize={20}
                  checkcontainerStyle={{marginRight: 0}}
                  checked={item2.isSelected}
                />
              </View>
            );
          })}
        </View>
      </View>
      <CText text={CStrings.special_food} style={styles.listItemTitle} />
      <View style={styles.listItemContainer}>
        {item.specialFood.map(item2 => {
          return (
            <View style={styles.listItemCheckboxContainer}>
              <CCheckBox
                title={item2.name}
                checkIconSize={20}
                checkcontainerStyle={{marginRight: 0}}
                checked={item2.isSelected}
              />
            </View>
          );
        })}
      </View>
    </View>
  );

  //
  const MealOffRenderItem2 = ({
    foodType,
    title,
    isEnabled,
    onPress,
    cateringName,
  }) => (
    <View style={styles.mealOffRenderItem2Container}>
      <View style={{width: '70%'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <CText text={title} style={{fontSize: 14}} />
          <CText text={cateringName} style={styles.foodName} />
        </View>
        <View style={styles.listItemContainer}>
          {foodType.map(item2 => {
            if (item2.isSelected) {
              return (
                <View style={{paddingVertical: 10, paddingHorizontal: 6}}>
                  <CText text={item2.name} style={styles.foodName} />
                </View>
              );
            } else {
              return null;
            }
          })}
        </View>
      </View>
      <SwitchToggle
        switchOn={isEnabled}
        onPress={onPress}
        circleColorOff={CColors.white}
        circleColorOn={CColors.white}
        backgroundColorOn={CColors.green}
        backgroundColorOff={CColors.light_gray}
      />
    </View>
  );

  //meal off render
  const mealOffRenderItem = ({item}) => {
    if (item.day == selectedDay) {
      return (
        <View>
          <MealOffRenderItem2
            foodType={item.regularFood}
            title={CStrings.regular_meal}
            isEnabled={isRegularMealEnabled}
            onPress={() => setIsRegularMealEnabled(!isRegularMealEnabled)}
            cateringName={item.cateringDetails.name}
          />
          <MealOffRenderItem2
            foodType={item.extraFood}
            title={CStrings.extra_menu}
            isEnabled={isExtraMealEnabled}
            onPress={() => setIsExtraMealEnabled(!isExtraMealEnabled)}
            cateringName={item.cateringDetails.name}
          />
          <MealOffRenderItem2
            foodType={item.specialFood}
            title={CStrings.special_food}
            isEnabled={isSpecialMealEnabled}
            onPress={() => setIsSpecialMealEnabled(!isSpecialMealEnabled)}
            cateringName={item.cateringDetails.name}
          />
        </View>
      );
    } else {
      return null;
    }
  };

  //Main UI start from here
  return (
    <View>
      {/* modal for edit meal */}
      <CModla
        visible={openMealEditModal}
        cancelButton={modalCancel}
        offTheModal={modalCancel}>
        <View>
          <FlatList
            data={foodArray.filter(item => item.day == selectedDay)}
            keyExtractor={(item, index) => index}
            renderItem={renderItem}
          />
        </View>
      </CModla>
      {/* modal for feedback  meal */}
      <CModla
        visible={openFeedBackModal}
        cancelButton={() => setOpenFeedBackModal(false)}
        offTheModal={() => setOpenFeedBackModal(false)}
        viewAnimation="slideInUp">
        <View style={styles.feedbackModalContainer}>
          <View style={styles.feedbackModalTextContainer}>
            <CText text={`${CStrings.feedback} :`} style={{fontSize: 18}} />
            <CText text={totalRating} style={{fontSize: 20}} />
          </View>
          <RatingWithText
            text={CStrings.food_is_delicious}
            onFinishRating={num => {
              setTestRating(num);
              setTotalRating(totalRating + num);
            }}
          />
          <RatingWithText
            text={CStrings.salt}
            onFinishRating={num => setSaltRating(num)}
          />
          <RatingWithText
            text={CStrings.oil}
            onFinishRating={num => setOilRating(num)}
          />
          <RatingWithText
            text={CStrings.test_is_not_good}
            onFinishRating={num => setBadTestRating(num)}
          />
          <CInputTextWithText
            text={CStrings.comment}
            placeholder={CStrings.write_your_comment}
            textInputStyle={{fontSize: 15}}
            defaultValue={comment}
            onChangeText={text => setComment(text)}
          />
        </View>
      </CModla>
      {/* modal for off meal */}
      <CModla
        visible={openMealOffModal}
        buttonContainerStyle={{
          flexDirection: 'column',
          alignItems: 'center',
          height: '12%',
        }}
        buttonMarginBottom={30}
        buttonBorderRadius={50}
        buttonWidth={'100%'}
        saveText={CStrings.off_today_all_meal}
        cancelText={CStrings.off_other_all_meal}
        saveButton={offTodayAllMeal}
        cancelButton={offOtherDayMeal}
        offTheModal={() => setOpenMealOffModal(false)}
        animationOutTiming={30}
        viewAnimation="slideInUp">
        <View
          style={{
            backgroundColor: CColors.white,
            paddingHorizontal: 15,
            paddingVertical: 20,
            borderRadius: 20,
          }}>
          <FlatList
            data={foodArray}
            renderItem={mealOffRenderItem}
            keyExtractor={(item, index) => index}
          />
        </View>
      </CModla>
      {/* modal for off other day meal */}
      <CModla
        visible={openOtherDayMealOffModal}
        //saveButton={saveOtherDayMealOff}
        viewAnimation="bounceInRight"
        cancelButton={saveOtherDayMealOff}>
        <View style={styles.otherDayMealOffContainer}>
          <CText
            text={CStrings.off_other_all_meal}
            style={styles.otherDayMealOffText}
          />
          <SevenDaySelect />
        </View>
      </CModla>

      <View style={styles.textContainer}>
        <View style={styles.iconContainer}>
          <CText text={menualSelectedDay} style={styles.heading} />
          {todayDate == menualSelectedDay ? (
            ''
          ) : (
            <CIcon
              iconSize={20}
              iconName={'edit'}
              iconColor={CColors.black}
              onPress={iconHandeler}
            />
          )}
        </View>
        <CText
          text={
            todayDate == menualSelectedDay
              ? CStrings.you_can_not_cancel_today_meal
              : CStrings.you_can_change_this_meal
          }
          style={
            todayDate == menualSelectedDay
              ? styles.title(CColors.gray)
              : styles.title(CColors.black)
          }
        />
      </View>

      <View style={{height: '70%'}}>
        <CCard
          data={foodArray}
          selectedDay={selectedDay}
          today={today}
          feedbackPress={feedback}
          offTheMealPress={offTheMeal}
        />
      </View>
    </View>
  );
}
export default HomeView;
