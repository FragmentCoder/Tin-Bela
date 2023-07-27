import React, {useContext} from 'react';
import {View, ScrollView} from 'react-native';
import styles from './style';
import CText from '../../components/text/CText';
import CColors from '../../color/CColors';
import CHeader from '../../components/header/CHeader';
import CStrings from '../../strings/CStrings';
import {AppContext} from '../../context/CContext';
import CCard2 from '../../components/card_2/CCard2';
import CButton from '../../components/button/CButton';

function InvoiceDetails(props) {
  const {invoiceData} = useContext(AppContext);
  return (
    <CHeader title={CStrings.invoice_details}>
      <ScrollView style={{flex: 1}}>
        <CCard2 style={styles.border}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingTop: 20,
            }}>
            <View>
              <View style={{flexDirection: 'row'}}>
                <CText text={CStrings.invoice} />
                <CText
                  text={invoiceData.invoice}
                  style={{color: CColors.gray, marginLeft: 5, fontSize: 13}}
                />
              </View>
              <CText
                text={invoiceData.date.invoice_day}
                style={{fontSize: 10, marginVertical: 5}}
              />
              <CText text={invoiceData.date.week} style={{fontSize: 10}} />
            </View>
            {invoiceData.catering === undefined ? (
              ''
            ) : (
              <View>
                <CText text={invoiceData.catering.name} />
                <CText
                  text={invoiceData.catering.address}
                  style={{color: CColors.gray, fontSize: 12}}
                />
              </View>
            )}
          </View>
          <View style={{marginTop: 30}}>
            <View
              style={[
                styles.textView(CColors.white),
                {...{paddingVertical: 0}},
              ]}>
              <CText
                text={CStrings.meal_details}
                style={{color: CColors.gray}}
              />
              <CText text={CStrings.taka} style={{color: CColors.gray}} />
            </View>
            <View style={styles.textView(CColors.light_gray)}>
              <View>
                <CText text={invoiceData.meal.regular_meal.name} />
                <CText
                  text={invoiceData.meal.regular_meal.demo}
                  style={styles.textViewText}
                />
              </View>
              <CText text={invoiceData.meal.regular_meal.total} />
            </View>
            <View style={styles.textView(CColors.white)}>
              <View>
                <CText text={invoiceData.meal.extra_meal.name} />
                <CText
                  text={invoiceData.meal.extra_meal.demo}
                  style={styles.textViewText}
                />
              </View>
              <CText text={invoiceData.meal.extra_meal.total} />
            </View>
            <View style={styles.textView(CColors.light_gray)}>
              <View>
                <CText text={invoiceData.meal.special_meal.name} />
                <CText
                  text={invoiceData.meal.special_meal.demo}
                  style={styles.textViewText}
                />
              </View>
              <CText text={invoiceData.meal.special_meal.total} />
            </View>
            <View style={styles.textView(CColors.white)}>
              <CText text={CStrings.total} style={{fontSize: 20}} />
              <CText text={invoiceData.total} style={{fontSize: 20}} />
            </View>
          </View>
        </CCard2>
        <View style={{marginVertical: 50}}>
          <CButton
            text={CStrings.payment_complete}
            buttonStyles={styles.paymentButton(CColors.orange)}
            textStyles={styles.paymentText}
          />
          <CButton
            text={CStrings.save_pdf}
            buttonStyles={styles.paymentButton(CColors.gray)}
            textStyles={styles.paymentText}
          />
        </View>
      </ScrollView>
    </CHeader>
  );
}
export default InvoiceDetails;
