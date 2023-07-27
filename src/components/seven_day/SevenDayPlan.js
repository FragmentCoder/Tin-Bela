import React from 'react';
import {View} from 'react-native';
import styles from './style';
import CText from '../text/CText';
import CColors from '../../color/CColors';
import CStrings from '../../strings/CStrings';

import CIcon from '../icon/CIcon';

function SevenDay() {
  // const [offDay, setOffDay] = useState(false);

  const buttonFunction = () => {
    console.log(`Button is press`);
  };

  const Icon = props => {
    return (
      <CIcon
        iconName="plus"
        iconType="antdesign"
        iconColor={CColors.green}
        iconSize={17}
        reverse={true}
        containerStyle={styles.button}
        onPress={props.onPress}
      />
    );
  };
  const DisableIcon = () => {
    return <CText text={CStrings.off_day} style={styles.offDay} />;
  };

  const Card = props => {
    return (
      <View style={styles.card}>
        <CText text={props.day} style={styles.day} />
        <CText text={props.date} style={styles.date} />
        {props.offDay ? <DisableIcon /> : <Icon />}
      </View>
    );
  };
  const TwoCard = props => {
    return (
      <View style={styles.twoCard}>
        <Card
          day={props.dayOne}
          date={props.dateOne}
          onPress={props.buttonOne}
        />
        <Card
          day={props.dayTwo}
          date={props.dateTwo}
          onPress={props.buttonTwo}
        />
      </View>
    );
  };

  //main UI start from hear
  return (
    <View style={styles.container}>
      <TwoCard
        dayOne={CStrings.saturday}
        dayTwo={CStrings.sunday}
        dateOne={CStrings.date_demo_mini}
        dateTwo={CStrings.date_demo_mini}
      />
      <TwoCard
        dayOne={CStrings.monday}
        dayTwo={CStrings.tuesday}
        dateOne={CStrings.date_demo_mini}
        dateTwo={CStrings.date_demo_mini}
      />
      <TwoCard
        dayOne={CStrings.wednesday}
        dayTwo={CStrings.thursday}
        dateOne={CStrings.date_demo_mini}
        dateTwo={CStrings.date_demo_mini}
      />
      <Card
        day={CStrings.friday}
        date={CStrings.date_demo_mini}
        offDay={true}
      />
    </View>
  );
}
export default SevenDay;
