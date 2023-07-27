import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import CStrings from '../strings/CStrings';
import CColors from '../color/CColors';

//month index strt from 0.that's why we need to additation 1.
//weekday index strt from 0.that's why we need to additation 1.
//week 0 = sunday, 1 = monday ,.....

const DateTest = () => {
  const dayList = [
    {key: 1, day: CStrings.sundayShort},
    {key: 2, day: CStrings.mondayShort},
    {key: 3, day: CStrings.tuesdayShort},
    {key: 4, day: CStrings.wednesdayShort},
    {key: 5, day: CStrings.thursdayShort},
    {key: 6, day: CStrings.fridayShort},
    {key: 7, day: CStrings.saturdayShort},
  ];

  const dateList = [
    {key: 1, date: CStrings.one},
    {key: 2, date: CStrings.two},
    {key: 3, date: CStrings.three},
    {key: 4, date: CStrings.four},
    {key: 5, date: CStrings.five},
    {key: 6, date: CStrings.six},
    {key: 7, date: CStrings.seven},
    {key: 8, date: CStrings.eight},
    {key: 9, date: CStrings.nine},
    {key: 10, date: CStrings.ten},
    {key: 11, date: CStrings.eleven},
    {key: 12, date: CStrings.twelve},
    {key: 13, date: CStrings.thirteen},
    {key: 14, date: CStrings.fourteen},
    {key: 15, date: CStrings.fifteen},
    {key: 16, date: CStrings.sixteen},
    {key: 17, date: CStrings.seventeen},
    {key: 18, date: CStrings.eighteen},
    {key: 19, date: CStrings.nineteen},
    {key: 20, date: CStrings.twenty},
    {key: 21, date: CStrings.twenty_one},
    {key: 22, date: CStrings.twenty_two},
    {key: 23, date: CStrings.twenty_three},
    {key: 24, date: CStrings.twenty_four},
    {key: 25, date: CStrings.twenty_five},
    {key: 26, date: CStrings.twenty_six},
    {key: 27, date: CStrings.twenty_seven},
    {key: 28, date: CStrings.twenty_eight},
    {key: 29, date: CStrings.twenty_nine},
    {key: 30, date: CStrings.thirty},
    {key: 31, date: CStrings.thirty_one},
  ];

  let weekWithDate = [
    {key: 1, day: CStrings.sundayShort, date: null},
    {key: 2, day: CStrings.mondayShort, date: null},
    {key: 3, day: CStrings.tuesdayShort, date: null},
    {key: 4, day: CStrings.wednesdayShort, date: null},
    {key: 5, day: CStrings.thursdayShort, date: null},
    {key: 6, day: CStrings.fridayShort, date: null},
    {key: 0, day: CStrings.saturdayShort, date: null},
  ];
  //---------------------------------date-------------------------------------------------//
  const TodayDateIs = new Date('2024-04-30'); //todat date is
  const currentWeekDay = TodayDateIs.getDay(); //output is 1 (monday)
  const currentDay = TodayDateIs.getDate(); //output is 22
  const totalDaysInThisMonth = new Date(
    TodayDateIs.getFullYear(),
    TodayDateIs.getMonth() + 1,
    0,
  ).getDate(); //output is 31
  const totalDaysInPreviousMonth = new Date(
    TodayDateIs.getFullYear(),
    TodayDateIs.getMonth(),
    0,
  ).getDate(); //output is 30

  const sundayDateIs = currentDay - currentWeekDay; //get sunday value by index
  let newDate = sundayDateIs;
  //make date from sunday to saturday.
  for (let day = 0; day < 7; day++) {
    //if newDate = 0.means date goto previews month
    if (newDate < 1) {
      newDate = totalDaysInPreviousMonth + newDate;
    } else if (newDate > totalDaysInThisMonth) {
      newDate = 1;
    }
    //submitt date value
    //weekWithDate[day].date = newDate;
    weekWithDate[day].date = dateList[newDate - 1].date;
    newDate = newDate + 1;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.date}>Today is {currentDay}</Text>
      <Text style={styles.date}>Today day is {currentWeekDay}</Text>
      <Text style={styles.month}>
        Total days in this month: {totalDaysInThisMonth}
      </Text>

      {weekWithDate.map((item, index) => {
        return (
          <View>
            <Text>{item.day}</Text>
            <Text>{item.date}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: CColors.white,
  },
  date: {
    fontSize: 24,
    marginBottom: 20,
  },
  month: {
    fontSize: 18,
  },
});

export default DateTest;
