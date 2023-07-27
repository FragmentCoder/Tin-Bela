import React, {useContext, useState} from 'react';
import {View, LogBox, ScrollView} from 'react-native';
import styles from './style';
import CHeader from '../../components/header/CHeader';
import CStrings from '../../strings/CStrings';
import CInputTextWithText from '../../components/input_text_with_text/CInputTextWithText';
import CDropDownWithTextInputandText from '../../components/drop_down_with_text_input_and_text/CDropDownWithTextInput';
import CButton from '../../components/button/CButton';
import CText from '../../components/text/CText';
import CImagePicker from '../../components/image_picker/CImagePicker';
import CColors from '../../color/CColors';
import {AppContext} from '../../context/CContext';

//app start
function AccountSettings(props) {
  //hide drop down warning.
  //if anything go wrong.don't use flatlist inside of scrollview.just use ListHeaderComponent & ListFooterComponent
  LogBox.ignoreAllLogs();

  //hooks
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [officeName, setOfficeName] = useState(null);
  const [officeArea, setOfficeArea] = useState(null);
  const {dropDownListValue, imagePath} = useContext(AppContext);

  //functions
  const saveButton = () => {
    console.log(`Button is press`);

    //get dropdown value from onother component
    let dropDrownSelectedValue = dropDownListValue;
    //

    //get image Path from onother component
    let selectedImagePath = imagePath;
    setOfficeArea(dropDrownSelectedValue);
    console.log(
      `button is press & all value is ----> \n\n
      Name is = ${name} \nEmail is = ${email} \n
      Office Name is = ${officeName} \n
      Office Area is = ${officeArea}\n
      image Path = ${selectedImagePath}`,
    );
    //go to next screen
    props.navigation.navigate('tab', {screen: 'Home'});
  };
  const imageButton = () => {
    console.log(`image boutton is press`);
  };

  //value
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
    <CHeader title={CStrings.account_settings}>
      <ScrollView>
        <View style={styles.container}>
          <CInputTextWithText
            placeholder={CStrings.write_your_name}
            text={CStrings.give_your_name}
            keyboardType="default"
            onChangeText={text => setName(text)}
          />
          <CInputTextWithText
            placeholder={CStrings.write_your_mail}
            text={CStrings.mail}
            keyboardType="email-address"
            onChangeText={text => setEmail(text)}
          />
          <CInputTextWithText
            placeholder={CStrings.write_your_office_name}
            text={CStrings.office_name}
            keyboardType="default"
            onChangeText={text => setOfficeName(text)}
          />
          <CDropDownWithTextInputandText data={DATA} />
          <CImagePicker />
          <CText text={CStrings.profile_image} style={styles.text} />

          <CButton
            text={CStrings.save}
            onPress={saveButton}
            buttonStyles={styles.button}
            textStyles={{fontSize: 17, color: CColors.white}}
          />
        </View>
      </ScrollView>
    </CHeader>
  );
}
export default AccountSettings;
