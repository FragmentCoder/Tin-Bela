import React, {useState} from 'react';
import {ToastAndroid, View, Image, ScrollView} from 'react-native';
import styles from './style';
import CText from '../../components/text/CText';
import CColors from '../../color/CColors';
import CHeader from '../../components/header/CHeader';
import CStrings from '../../strings/CStrings';
import CClander from '../../components/calendar/CClander';
import CCard2 from '../../components/card_2/CCard2';
import CIcon from '../../components/icon/CIcon';
import Clipboard from '@react-native-clipboard/clipboard';

function Group() {
  const groupCode = 'Ta98SW';
  const groupDataList = {
    cateringList: [
      {
        name: 'মায়ের কেটারিং',
        location: 'বাড়ি নং ১১, রামপুরা, ঢাকা।',
      },
      {
        name: 'মায়ের দোয়া',
        location: 'বাড়ি নং ৩৫, বাড্ডা, ঢাকা।',
      },
      {
        name: 'মায়ের দোয়া কেটারিং',
        location: 'বাড়ি নং ৯৬, মিরপুর, ঢাকা।',
      },
    ],
    userList: [
      {
        key: 1,
        name: 'tapu',
        image: require('../../../assets/images/user_1.jpg'),
      },
      {
        key: 2,
        name: 'sagor islam',
        image: require('../../../assets/images/user_2.jpg'),
      },
      {
        key: 3,
        name: 'islam',
        image: require('../../../assets/images/user_3.jpeg'),
      },
      {
        key: 4,
        name: 'sweety',
        image: require('../../../assets/images/user_4.jpeg'),
      },
      {
        key: 5,
        name: 'sagor',
        image: require('../../../assets/images/user_5.jpeg'),
      },
    ],
    office: {
      name: 'tin bela',
      area: 'mirpur',
    },
  };

  //state
  const [admin, setAdmin] = useState(false);
  //function
  const copyText = () => {
    console.log(`copyText`);
    Clipboard.setString(groupCode);

    ToastAndroid.show('Group Code is Copy', ToastAndroid.SHORT);
  };

  const addUser = () => {
    console.log(`addUser`);
  };
  const DemoMeal = props => (
    <View style={[styles.divCommonStyle, styles.demoMeal]}>
      <CText text={props.name} style={{fontSize: 13}} />
      <CText
        text={props.quantity}
        style={{fontSize: 13, color: CColors.green}}
      />
    </View>
  );
  const MealItem = props => (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <DemoMeal name={props.name1} quantity={props.quantity1} />
      <DemoMeal name={props.name2} quantity={props.quantity2} />
    </View>
  );

  const CateringTotalItem = () => (
    <CCard2 style={styles.cateringTotalItem}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 20,
        }}>
        <Image
          source={require('../../../assets/images/avater.png')}
          style={{
            height: 40,
            width: 40,
          }}
        />
        <View style={{marginLeft: 10}}>
          <CText
            text="মায়ের দোয়া কেটারিং"
            style={{fontSize: 18, marginBottom: 5}}
          />
          <CText
            text="বাড়ি নং ১১, রামপুরা, ঢাকা"
            style={{color: CColors.gray}}
          />
        </View>
      </View>
      <View
        style={[
          styles.divCommonStyle,
          {
            flexDirection: 'row',
            paddingVertical: 20,
            justifyContent: 'space-between',
          },
        ]}>
        <CText text={CStrings.today_total_meal} style={{fontSize: 18}} />
        <CText text={'৬৬'} style={{fontSize: 18, color: CColors.green}} />
      </View>
      <MealItem
        name1={'রুই মাছ + ভর্তা'}
        quantity1={'৭'}
        name2={'রুই মাছ + ভাজি'}
        quantity2={'১১'}
      />
      <MealItem
        name1={'মুরগি + শাক'}
        quantity1={'১০'}
        name2={'গরু + ভর্তা'}
        quantity2={'৩'}
      />
      <MealItem
        name1={'মাছ + ভর্তা'}
        quantity1={'৮'}
        name2={'ডিম + ভর্তা'}
        quantity2={'৬'}
      />
      <MealItem
        name1={'ভাজি + ভর্তা'}
        quantity1={'৯'}
        name2={'শাক + ভর্তা'}
        quantity2={'১২'}
      />
    </CCard2>
  );
  return (
    <CHeader iconSize={0} title={CStrings.group_name_demo} rightIconSize={30}>
      <CClander />
      <ScrollView>
        <View style={styles.container}>
          <CCard2 style={styles.cardContainer}>
            <View style={styles.groupCodeTextContainer}>
              <CText text={CStrings.group_code_demo} />
              <CText
                text={groupCode}
                style={{color: CColors.green, marginLeft: 10}}
              />
            </View>
            <View style={styles.copyTextButton}>
              <CIcon
                iconName="share-social-outline"
                iconType="ionicon"
                iconColor={CColors.gray}
                iconSize={20}
                onPress={copyText}
              />
            </View>
          </CCard2>
          <CCard2 style={styles.cardContainer}>
            <CText text={CStrings.member} />
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Image
                source={groupDataList.userList[0].image}
                style={[styles.image, styles.image0]}
              />
              <Image
                source={groupDataList.userList[1].image}
                style={[styles.image, styles.image1]}
              />
              <Image
                source={groupDataList.userList[2].image}
                style={[styles.image, styles.image2]}
              />
              <Image
                source={groupDataList.userList[3].image}
                style={[styles.image, styles.image3]}
              />

              <View style={styles.fiveContainer}>
                <CText text={'+৫'} style={{color: CColors.white}} />
              </View>
              {admin ? (
                <View style={styles.addUser}>
                  <CIcon
                    iconName={'plus'}
                    iconSize={20}
                    onPress={addUser}
                    iconColor={CColors.white}
                  />
                </View>
              ) : (
                ''
              )}
            </View>
          </CCard2>
          <CCard2 style={styles.totalItem}>
            <CText text={'১৩২'} style={{color: CColors.green, fontSize: 40}} />
            <CText
              text={CStrings.today_total_meal}
              style={{color: CColors.black, fontSize: 16}}
            />
          </CCard2>
          <CateringTotalItem />
          <CateringTotalItem />
        </View>
      </ScrollView>
    </CHeader>
  );
}
export default Group;
