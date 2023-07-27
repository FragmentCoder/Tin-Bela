import React, {useState, useContext} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {AppContext} from '../../context/CContext';

import * as Animatable from 'react-native-animatable';

import styles from './style';
import CHeader from '../../components/header/CHeader';
import CStrings from '../../strings/CStrings';
import CButton from '../../components/button/CButton';
import CText from '../../components/text/CText';
import CDropDown from '../../components/drop_down/CDropDown';
import CColors from '../../color/CColors';
import CIcon from '../../components/icon/CIcon';
import CCard2 from '../../components/card_2/CCard2';

function Calculation(props) {
  const [activeButton, setActiveButton] = useState(CStrings.catering);
  const [cateringAnimation, setCateringAnimation] = useState(null);
  const [tenbelaAnimation, setTenbelaAnimation] = useState(null);
  const {setInvoiceData} = useContext(AppContext);

  //array
  const billDay = [CStrings.this_year, CStrings.this_month, CStrings.this_week];
  const billType = [CStrings.paid, CStrings.unpaid];
  const cateringBillList = [
    {
      key: 1,
      invoice: '#CAP554',
      date: {
        invoice_day: '২০ ডিসেম্বর ২০২৩',
        week: '২০ ডিসেম্বর থেকে ২৭ ডিসেম্বর',
        month: 'ডিসেম্বর',
        year: '২০২৩',
      },
      catering: {
        name: 'মায়ের দোয়া ক্যাটারিং',
        address: 'রামপুরা,ঢাকা',
      },
      meal: {
        regular_meal: {
          name: CStrings.regular_meal,
          demo: '৬ মিল x ৬০ টাকা',
          total: '৩৬০ /-',
        },
        extra_meal: {
          name: `কবুতর (${CStrings.extra_menu})`,
          demo: '২ x ২০০',
          total: '৪০০ /-',
        },
        special_meal: {
          name: `তেহারি`,
          demo: '২ x ৩০',
          total: '৬০ /-',
        },
      },
      total: '৮২০ /-',
      paid: false,
    },
    {
      key: 2,
      invoice: '#CAP554',
      date: {
        invoice_day: '২০ ডিসেম্বর ২০২৩',
        week: '২০ ডিসেম্বর থেকে ২৭ ডিসেম্বর',
        month: 'ডিসেম্বর',
        year: '২০২৩',
      },
      catering: {
        name: 'মায়ের দোয়া ক্যাটারিং',
        address: 'রামপুরা,ঢাকা',
      },
      meal: {
        regular_meal: {
          name: CStrings.regular_meal,
          demo: '৬ মিল x ৬০ টাকা',
          total: '৩৬০ /-',
        },
        extra_meal: {
          name: `কবুতর (${CStrings.extra_menu})`,
          demo: '২ x ২০০',
          total: '৪০০ /-',
        },
        special_meal: {
          name: `তেহারি`,
          demo: '২ x ৩০',
          total: '৬০ /-',
        },
      },
      total: '৮২০ /-',
      paid: false,
    },
    {
      key: 3,
      invoice: '#CAP554',
      date: {
        invoice_day: '২০ ডিসেম্বর ২০২৩',
        week: '২০ ডিসেম্বর থেকে ২৭ ডিসেম্বর',
        month: 'ডিসেম্বর',
        year: '২০২৩',
      },
      catering: {
        name: 'মায়ের দোয়া ক্যাটারিং',
        address: 'রামপুরা,ঢাকা',
      },
      meal: {
        regular_meal: {
          name: CStrings.regular_meal,
          demo: '৬ মিল x ৬০ টাকা',
          total: '৩৬০ /-',
        },
        extra_meal: {
          name: `কবুতর (${CStrings.extra_menu})`,
          demo: '২ x ২০০',
          total: '৪০০ /-',
        },
        special_meal: {
          name: `তেহারি`,
          demo: '২ x ৩০',
          total: '৬০ /-',
        },
      },
      total: '৮২০',

      paid: false,
    },
  ];
  const tenbelaBillList = [
    {
      key: 1,
      invoice: '#CAP554',
      date: {
        invoice_day: '২০ ডিসেম্বর ২০২৩',
        week: '২০ ডিসেম্বর থেকে ২৭ ডিসেম্বর',
        month: 'ডিসেম্বর',
        year: '২০২৩',
      },

      meal: {
        regular_meal: {
          name: CStrings.regular_meal,
          demo: '৬ মিল x ৬০ টাকা',
          total: '৩৬০ /-',
        },
        extra_meal: {
          name: `কবুতর (${CStrings.extra_menu})`,
          demo: '২ x ২০০',
          total: '৪০০ /-',
        },
        special_meal: {
          name: `তেহারি`,
          demo: '২ x ৩০',
          total: '৬০ /-',
        },
      },
      total: '৮২০ /-',
      paid: false,
    },
    {
      key: 2,
      invoice: '#CAP554',
      date: {
        invoice_day: '২০ ডিসেম্বর ২০২৩',
        week: '২০ ডিসেম্বর থেকে ২৭ ডিসেম্বর',
        month: 'ডিসেম্বর',
        year: '২০২৩',
      },

      meal: {
        regular_meal: {
          name: CStrings.regular_meal,
          demo: '৬ মিল x ৬০ টাকা',
          total: '৩৬০ /-',
        },
        extra_meal: {
          name: `কবুতর (${CStrings.extra_menu})`,
          demo: '২ x ২০০',
          total: '৪০০ /-',
        },
        special_meal: {
          name: `তেহারি`,
          demo: '২ x ৩০',
          total: '৬০ /-',
        },
      },
      total: '৮২০ /-',
      paid: false,
    },
  ];

  //function
  const cateringFuction = () => {
    if (activeButton == CStrings.tenbela) {
      setCateringAnimation('slideInLeft');
      setActiveButton(CStrings.catering);
    } else {
      return;
    }
  };

  const tenBelaFunction = () => {
    if (activeButton == CStrings.catering) {
      setTenbelaAnimation('slideInRight');
      setActiveButton(CStrings.tenbela);
    } else {
      return;
    }
  };

  const bills = ({item}) => (
    <CCard2 style={styles.billsContainer}>
      <View>
        <View style={styles.textContainer}>
          <View>
            <View style={{flexDirection: 'row', marginBottom: 10}}>
              <CText
                text={CStrings.invoice}
                style={{marginRight: 10, fontSize: 13}}
              />
              <CText
                text={item.invoice}
                style={{color: CColors.gray, fontSize: 13}}
              />
            </View>
            <CText
              text={item.date.invoice_day}
              style={{fontSize: 10, marginBottom: 5}}
            />
            <CText text={item.date.week} style={{fontSize: 10}} />
          </View>
          {item.catering === undefined ? (
            ''
          ) : (
            <View>
              <CText text={item.catering.name} />
              <CText
                text={item.catering.address}
                style={{color: CColors.gray, fontSize: 13}}
              />
            </View>
          )}
        </View>
        <View style={styles.totalContainer}>
          <CText text={CStrings.total} style={{fontSize: 28}} />
          <CText
            text={`${item.total} টাকা`}
            style={{fontSize: 28, color: CColors.green}}
          />
        </View>
        <TouchableOpacity
          style={{flexDirection: 'row', marginTop: 20}}
          onPress={() => {
            setInvoiceData(item);
            console.log(`click`);
            props.navigation.navigate('stack', {
              screen: CStrings.invoice_details,
            });
          }}>
          <CIcon
            iconName="filetext1"
            iconType="antdesign"
            iconColor={CColors.green}
            iconSize={20}
          />
          <CText text={CStrings.view_details} style={{color: CColors.green}} />
        </TouchableOpacity>
      </View>
    </CCard2>
  );

  const footerComponent = () => (
    <View>
      <CButton
        text={CStrings.pay_handcash}
        buttonStyles={styles.payHandButton(CColors.green)}
        textStyles={styles.payHandText}
      />
      <CButton
        text={CStrings.pay_using_mobile_banking}
        buttonStyles={styles.payHandButton(CColors.orange)}
        textStyles={styles.payHandText}
      />
    </View>
  );
  return (
    <CHeader iconSize={0} title={CStrings.cost} rightIconSize={30}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <CButton
            text={CStrings.catering}
            buttonStyles={
              activeButton == CStrings.catering
                ? styles.selectedButton
                : styles.button
            }
            textStyles={
              activeButton == CStrings.catering
                ? styles.selectedButtonText
                : styles.buttonText
            }
            onPress={cateringFuction}
          />
          <CButton
            text={CStrings.tenbela}
            buttonStyles={
              activeButton == CStrings.tenbela
                ? styles.selectedButton
                : styles.button
            }
            textStyles={
              activeButton == CStrings.tenbela
                ? styles.selectedButtonText
                : styles.buttonText
            }
            onPress={tenBelaFunction}
          />
        </View>
        <View style={{flexDirection: 'row', marginBottom: 20}}>
          <CDropDown placeholder={CStrings.this_week} data={billDay} />
          <View style={{marginLeft: 30}} />
          <CDropDown placeholder={CStrings.unpaid} data={billType} />
        </View>
        <View style={styles.itemContainer}>
          {activeButton == CStrings.catering ? (
            <Animatable.View
              animation={cateringAnimation}
              duration={500}
              style={{flex: 1}}>
              <View>
                <FlatList
                  data={cateringBillList}
                  renderItem={bills}
                  keyExtractor={(item, index) => index}
                />
              </View>
            </Animatable.View>
          ) : (
            <Animatable.View
              animation={tenbelaAnimation}
              duration={500}
              style={{flex: 1}}>
              <View>
                <FlatList
                  data={tenbelaBillList}
                  renderItem={bills}
                  keyExtractor={(item, index) => index}
                  ListFooterComponent={footerComponent}
                />
                <CButton />
                <CButton />
              </View>
            </Animatable.View>
          )}
        </View>
      </View>
    </CHeader>
  );
}
export default Calculation;
