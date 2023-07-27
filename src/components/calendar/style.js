import {StyleSheet} from 'react-native';
import CColors from '../../color/CColors';
const styles = StyleSheet.create({
  headerText: {
    color: CColors.green,
    fontSize: 15,
    textAlign: 'center',
    marginVertical: 20,
  },
  subContainer: {},

  item: width => {
    return {
      marginHorizontal: width / 90,
      width: (width - 10 - width / 90) / 9,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: CColors.light_green,
    };
  },
});
export default styles;
