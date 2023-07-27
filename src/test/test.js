import React from 'react';
import {View, Text} from 'react-native';

const TestPage = () => {
  const days = [];
  const today = new Date();
  let currentDate = new Date();

  // Set currentDate to the current day
  currentDate.setDate(today.getDate());

  // Find the previous Saturday
  while (currentDate.getDay() !== 6) {
    currentDate.setDate(currentDate.getDate() - 1);
  }

  // Generate the array of days and dates for the current week
  for (let i = 0; i < 7; i++) {
    /* const day = currentDate.toLocaleDateString('bn-BD', {weekday: 'long'});
    let tempDay = day.split(', ');
    console.log(`day  = ${tempDay[0]}`);
    console.log(`date  = ${tempDay[1]}`);
    let justDay = tempDay[0];
    const date = currentDate.toLocaleDateString('bn-BD', {
      month: 'short',
      day: 'numeric',
    }); */
    const day = currentDate.toLocaleDateString('en-US', {weekday: 'long'});
    let tempDay = day.split(', ');
    console.log(`day  = ${tempDay[0]}`);
    console.log(`date  = ${tempDay[1]}`);
    let justDay = tempDay[0];
    console.log(`just day = ${justDay}`);
    const date = currentDate.toLocaleDateString('en-US', {
      day: 'numeric',
    });

    days.push({justDay, date});
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return (
    <View>
      {days.map((item, index) => (
        <View key={index}>
          <Text>{item.justDay}</Text>
          <Text>{item.date}</Text>
        </View>
      ))}
    </View>
  );
};

export default TestPage;
