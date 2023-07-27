import React, {useContext, useState} from 'react';
import {View, ScrollView} from 'react-native';
import styles from './style';
import CHeader from '../../components/header/CHeader';
import CStrings from '../../strings/CStrings';
import CInputTextWithText from '../../components/input_text_with_text/CInputTextWithText';
import CDropDownWithTextInputandText from '../../components/drop_down_with_text_input_and_text/CDropDownWithTextInput';
import GradiantButtonWithIcon from '../../components/gradiant_button_with_icon/GradiantButtonWithIcon';
import {AppContext} from '../../context/CContext';

function CreateGroup(props) {
  const {dropDrownListValue, setOfficeData} = useContext(AppContext);

  const [officeName, setOfficeName] = useState(null);
  const [blockAndRoad, setBlockAndRoad] = useState(null);
  const [bulidingNumber, setBulidingNumber] = useState(null);
  const [houseName, setHouseName] = useState(null);
  const [otherDetails, setOtherDetails] = useState(null);

  const nextButton = () => {
    console.log(
      `Next Button is press & drop down value is ${dropDrownListValue}`,
    );
    const officeDataArray = {
      office_name: officeName,
      office_location: dropDrownListValue,
      block_and_road: blockAndRoad,
      buliding_number: bulidingNumber,
      house_name: houseName,
      other_details: otherDetails,
    };
    setOfficeData(officeDataArray);

    props.navigation.navigate('create_group_2');
  };

  const DATA = [
    {id: 'mango', value: 'Mango'},
    {id: 'Banna', value: 'Bannna'},
    {id: 'king', value: 'king'},
    {id: 'cake', value: 'cake'},
    {id: 'bag', value: 'bag'},
    {id: 'cat', value: 'cat'},
    {id: 'bat', value: 'bat'},
    {id: 'man', value: 'man'},
    {id: 'car', value: 'car'},
    {id: 'honda', value: 'honda'},
    {id: 'ball', value: 'ball'},
    {id: 'dog', value: 'dog'},
    {id: 'OTP', value: 'OTP'},
    {id: 'pet', value: 'pet'},

    {id: 'mango2', value: 'Mango'},
    {id: 'Banna2', value: 'Bannna'},
    {id: 'king2', value: 'king'},
    {id: 'cake2', value: 'cake'},
    {id: 'bag2', value: 'bag'},
    {id: 'cat2', value: 'cat'},
    {id: 'bat2', value: 'bat'},
    {id: 'man2', value: 'man'},
    {id: 'car2', value: 'car'},
    {id: 'honda2', value: 'honda'},
    {id: 'ball2', value: 'ball'},
    {id: 'dog2', value: 'dog'},
    {id: 'OTP2', value: 'OTP'},
    {id: 'pet2', value: 'pet'},
  ];

  return (
    <CHeader rightIconSize={0} title={CStrings.create_group} scrollAble={true}>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <CInputTextWithText
              text={CStrings.office_name}
              placeholder={CStrings.write_your_office_name}
              onChangeText={setOfficeName}
              value={officeName}
            />
            <CDropDownWithTextInputandText data={DATA} />
            <View style={styles.inputText}>
              <CInputTextWithText
                text={CStrings.block_and_road}
                placeholder={CStrings.block_and_road_placeHolader}
                onChangeText={setBlockAndRoad}
                value={blockAndRoad}
              />
              <CInputTextWithText
                text={CStrings.buliding_number}
                placeholder={CStrings.buliding_number_placeHolader}
                onChangeText={setBulidingNumber}
                value={bulidingNumber}
              />
            </View>
            <CInputTextWithText
              text={CStrings.house_name}
              placeholder={CStrings.house_name_placeHolader}
              onChangeText={setHouseName}
              value={houseName}
            />
            <CInputTextWithText
              text={CStrings.other_details}
              placeholder={CStrings.other_details_placeHolader}
              onChangeText={setOtherDetails}
              value={otherDetails}
            />
          </View>
          <View style={styles.button}>
            <GradiantButtonWithIcon onPress={nextButton} />
          </View>
        </View>
      </ScrollView>
    </CHeader>
  );
}
export default CreateGroup;
