import React, {useState} from 'react';
import CStrings from '../strings/CStrings';

const AppContext = React.createContext();

const AppProvider = props => {
  let defaultImagePath = require('../../assets/images/avater.png');

  const [windowHeight, setWindowHeight] = useState(0); //useState(772);
  const [windowWidth, setWindowWidth] = useState(0); //useState(360);
  const [dropDrownListValue, setDropDrownListValue] = useState(null);
  const [imagePath, setImagePath] = useState(defaultImagePath);
  const [accountStatus, setAccountStatus] = useState(CStrings.home);
  const [officeData, setOfficeData] = useState(CStrings.accept);
  const [menualSelectedDay, setMenualSelectedDay] = useState('');
  const [todayDate, setTodayDate] = useState('');
  const [invoiceData, setInvoiceData] = useState(null);

  const defultData = [
    {
      key: 1,
      profile_image: require('../../assets/images/avater.png'),
      catering: 'Mom Catering',
      location: 'বাড়ি নং ১১, রামপুরা, ঢাকা।',
      capacity: '১৫',
      menu_item: '১০',
      delivery_time: '১:৩০ দুপুর',
      have_special_food: 'আছে',
      regular_food: [
        {
          key: 11,
          image: require('../../assets/images/food_1.png'),
          name: 'ডিম',
          isSelected: false,
        },
        {
          key: 12,
          image: require('../../assets/images/food_2.png'),
          name: 'মুরগি',
          isSelected: false,
        },
        {
          key: 13,
          image: require('../../assets/images/food_3.png'),
          name: 'গরু',
          isSelected: true,
        },
        {
          key: 14,
          image: require('../../assets/images/food_4.png'),
          name: 'রুই মাছ',
          isSelected: false,
        },
      ],
      special_food: [
        {
          key: 111,
          image: require('../../assets/images/food_1.png'),
          name: 'তেহারি',
          price: '১০০ টাকা',
          isSelected: false,
        },
        {
          key: 112,
          image: require('../../assets/images/food_2.png'),
          name: 'খিচুড়ি',
          price: '১০০ টাকা',
          isSelected: false,
        },
        {
          key: 113,
          image: require('../../assets/images/food_3.png'),
          name: 'গরু',
          price: '১০০ টাকা',
          isSelected: false,
        },
        {
          key: 114,
          image: require('../../assets/images/food_4.png'),
          name: 'গরু',
          price: '১০০ টাকা',
          isSelected: false,
        },
      ],
      is_safe_food_verify: true,
      taka: '৳৬৫',
    },
    {
      key: 2,
      profile_image: require('../../assets/images/avater.png'),
      catering: 'মায়ের দোয়া',
      location: 'বাড়ি নং ১১, রামপুরা, ঢাকা।',
      capacity: '১৫',
      menu_item: '১০',
      delivery_time: '১:৩০ দুপুর',
      have_special_food: 'আছে',
      regular_food: [
        {
          key: 21,
          image: require('../../assets/images/food_1.png'),
          name: 'ডিম',
          isSelected: false,
        },
        {
          key: 22,
          image: require('../../assets/images/food_2.png'),
          name: 'মুরগি',
          isSelected: false,
        },
        {
          key: 23,
          image: require('../../assets/images/food_3.png'),
          name: 'গরু',
          isSelected: false,
        },
        {
          key: 24,
          image: require('../../assets/images/food_4.png'),
          name: 'রুই মাছ',
          isSelected: false,
        },
      ],
      special_food: [
        {
          key: 211,
          image: require('../../assets/images/food_3.png'),
          name: 'তেহারি',
          price: '১০০ টাকা',
          isSelected: false,
        },
        {
          key: 212,
          image: require('../../assets/images/food_3.png'),
          name: 'তেহারি',
          price: '১০০ টাকা',
          isSelected: false,
        },
      ],
      is_safe_food_verify: true,
      taka: '৳৬৫',
    },
    {
      key: 3,
      profile_image: require('../../assets/images/avater.png'),
      catering: 'মায়ের কেটারিং',
      location: 'বাড়ি নং ১১, রামপুরা, ঢাকা।',
      capacity: '১৫',
      menu_item: '১০',
      delivery_time: '১:৩০ দুপুর',
      have_special_food: 'আছে',
      regular_food: [
        {
          key: 31,
          image: require('../../assets/images/food_1.png'),
          name: 'ডিম',
          isSelected: false,
        },
        {
          key: 32,
          image: require('../../assets/images/food_2.png'),
          name: 'মুরগি',
          isSelected: false,
        },
        {
          key: 33,
          image: require('../../assets/images/food_3.png'),
          name: 'গরু',
          isSelected: false,
        },
        {
          key: 34,
          image: require('../../assets/images/food_4.png'),
          name: 'রুই মাছ',
          isSelected: false,
        },
      ],
      special_food: [
        {
          key: 311,
          image: require('../../assets/images/food_3.png'),
          name: 'তেহারি',
          price: '১০০ টাকা',
          isSelected: false,
        },
        {
          key: 312,
          image: require('../../assets/images/food_3.png'),
          name: 'তেহারি',
          price: '১০০ টাকা',
          isSelected: false,
        },
      ],
      is_safe_food_verify: true,
      taka: '৳৬৫',
    },
  ];
  const defultUserMealList = [
    {
      key: 1,
      day: CStrings.saturday,
      meal: [
        {
          key: 11,
          catering: 'Mom Catering',
          regular_food: [
            {
              key: 111,
              name: 'ডিম',
              price: 0,
            },
            {
              key: 112,
              name: 'মুরগি',
              price: 0,
            },
          ],
          specila_food: [
            {
              key: 112,
              name: 'মুরগি',
              price: 100,
            },
          ],
        },
      ],
      is_set: false,
      off_day: true,
    },
    {
      key: 2,
      day: CStrings.sunday,
      meal: [
        {
          key: 11,
          catering: 'Mom Catering',
          regular_food: [
            {
              key: 111,
              name: 'ডিম',
              price: 0,
            },
            {
              key: 112,
              name: 'মুরগি',
              price: 0,
            },
          ],
          specila_food: [
            {
              key: 112,
              name: 'মুরগি',
              price: 100,
            },
          ],
        },
      ],
      is_set: false,
      off_day: false,
    },
    {
      key: 3,
      day: CStrings.monday,
      meal: [
        {
          key: 11,
          catering: 'Mom Catering',
          regular_food: [
            {
              key: 111,
              name: 'ডিম',
              price: 0,
            },
            {
              key: 112,
              name: 'মুরগি',
              price: 0,
            },
          ],
          specila_food: [
            {
              key: 112,
              name: 'মুরগি',
              price: 100,
            },
          ],
        },
      ],
      is_set: false,
      off_day: false,
    },
    {
      key: 4,
      day: CStrings.tuesday,
      meal: [
        {
          key: 11,
          catering: 'Mom Catering',
          regular_food: [
            {
              key: 111,
              name: 'ডিম',
              price: 0,
            },
            {
              key: 112,
              name: 'মুরগি',
              price: 0,
            },
          ],
          specila_food: [
            {
              key: 112,
              name: 'মুরগি',
              price: 100,
            },
          ],
        },
      ],
      is_set: false,
      off_day: false,
    },
    {
      key: 5,
      day: CStrings.wednesday,
      meal: [
        {
          key: 11,
          catering: 'Mom Catering',
          regular_food: [
            {
              key: 111,
              name: 'ডিম',
              price: 0,
            },
            {
              key: 112,
              name: 'মুরগি',
              price: 0,
            },
          ],
          specila_food: [
            {
              key: 112,
              name: 'মুরগি',
              price: 100,
            },
          ],
        },
      ],
      is_set: false,
      off_day: false,
    },
    {
      key: 6,
      day: CStrings.thursday,
      meal: [
        {
          key: 11,
          catering: 'Mom Catering',
          regular_food: [
            {
              key: 111,
              name: 'ডিম',
              price: 0,
            },
            {
              key: 112,
              name: 'মুরগি',
              price: 0,
            },
          ],
          specila_food: [
            {
              key: 112,
              name: 'মুরগি',
              price: 100,
            },
          ],
        },
      ],
      is_set: false,
      off_day: false,
    },
    {
      key: 7,
      day: CStrings.friday,
      meal: [
        {
          key: 11,
          catering: '',
          regular_food: [
            {
              key: 111,
              name: '',
              price: 0,
            },
            {
              key: 112,
              name: '',
              price: 0,
            },
          ],
          specila_food: [
            {
              key: 112,
              name: '',
              price: 0,
            },
          ],
        },
      ],
      is_set: false,
      off_day: true,
    },
  ];

  const [data, setData] = useState(defultData);
  const [userMealList, setUserMealList] = useState(defultUserMealList);

  return (
    <AppContext.Provider
      value={{
        windowHeight,
        setWindowHeight,
        windowWidth,
        setWindowWidth,
        dropDrownListValue,
        setDropDrownListValue,
        imagePath,
        setImagePath,
        accountStatus,
        setAccountStatus,
        data,
        setData,
        userMealList,
        setUserMealList,
        officeData,
        setOfficeData,
        menualSelectedDay,
        setMenualSelectedDay,
        todayDate,
        setTodayDate,
        invoiceData,
        setInvoiceData,
      }}>
      {props.children}
    </AppContext.Provider>
  );
};
export {AppContext, AppProvider};
