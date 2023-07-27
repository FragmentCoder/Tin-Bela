import React, {useContext, useEffect} from 'react';
import {
  View,
  useWindowDimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import CText from '../../components/text/CText';
import CColors from '../../color/CColors';
import CStrings from '../../strings/CStrings';
import {AppContext} from '../../context/CContext';

function CClander() {
  const {setMenualSelectedDay, setTodayDate} = useContext(AppContext);
  //dimension
  const {height, width} = useWindowDimensions();
  //variable
  const tempArray = [];
  const today = new Date();
  const todayDate = today.getDate();
  let currentDate = new Date();

  //
  useEffect(() => {
    let currentDate = new Date();
    //set selected date for show user data.
    const tempfullDate = currentDate.toLocaleDateString('bn-BD', {
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    });
    setMenualSelectedDay(tempfullDate);
    setTodayDate(tempfullDate);
  }, []);

  //end

  // Set currentDate to the current day.today date is = 11/7/2023
  currentDate.setDate(today.getDate()); // now currentDate = 11

  // Find the previous Saturday
  //currentDate.getDay() = 4
  while (currentDate.getDay() !== 6) {
    currentDate.setDate(currentDate.getDate() - 1);
  }
  // Generate the array of days and dates for the current week
  for (let i = 0; i < 7; i++) {
    const dayNameDate = currentDate.toLocaleDateString('bn-BD', {
      weekday: 'short',
    });
    let splitDayNameDate = dayNameDate.split(', ');
    const day = splitDayNameDate[0];
    const date = currentDate.toLocaleDateString('bn-BD', {day: 'numeric'});
    const month = currentDate.toLocaleDateString('bn-BD', {month: 'long'});
    const year = currentDate.toLocaleDateString('bn-BD', {year: 'numeric'});
    const fullDate = currentDate.toLocaleDateString('bn-BD', {
      day: 'numeric',
      month: 'long',
      weekday: 'long',
    });
    const enDate = currentDate.toLocaleDateString('en-US', {day: 'numeric'});

    tempArray.push({
      day: day,
      date: date,
      month: month,
      year: year,
      clickable: todayDate <= enDate,
      isToday: enDate == todayDate ? true : false,
      fullDate: fullDate,
      textColor:
        todayDate > enDate
          ? CColors.gray
          : todayDate < enDate
          ? CColors.black
          : CColors.white,
      itemBackgroundColor:
        todayDate > enDate
          ? CColors.white
          : todayDate == enDate
          ? CColors.green
          : CColors.light_green,

      whatDay: todayDate > enDate ? 'off-day' : 'on-day',
    });
    currentDate.setDate(currentDate.getDate() + 1);
  }

  //function
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          if (item.clickable) {
            setMenualSelectedDay(item.fullDate);
          }
        }}
        style={[
          styles.item(width),
          {...{backgroundColor: item.itemBackgroundColor}},
        ]}>
        <CText
          text={
            item.day == CStrings.thursdayMiddum
              ? CStrings.thursdayShort
              : item.day
          }
          style={{color: item.textColor, fontSize: 13}}
        />
        <CText text={item.date} style={{color: item.textColor}} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={{marginBottom: 20}}>
      <CText
        text={`${tempArray[0].month} ${tempArray[0].year},${tempArray[0].date}-${tempArray[6].date} তারিখ (৭ দিন) `}
        style={styles.headerText}
      />

      <View
        style={{
          height: height / 12,
        }}>
        <FlatList
          data={tempArray}
          renderItem={renderItem}
          keyExtractor={({item, index}) => index}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
export default CClander;
