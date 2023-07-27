import {StyleSheet} from 'react-native';
import CColors from '../../color/CColors';
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: CColors.white},

  textView: color => {
    return {
      backgroundColor: color,
      paddingHorizontal: 10,
      paddingVertical: 20,
      alignItems: 'center',
      marginVertical: 5,
      flexDirection: 'row',
      justifyContent: 'space-between',
    };
  },
  textViewText: {color: CColors.gray, marginTop: 10, fontSize: 13},

  paymentButton: color => {
    return {
      backgroundColor: color,
      marginVertical: 10,
      padding: 15,
      borderRadius: 50,
      shadowColor: color,
    };
  },
  paymentText: {
    fontSize: 20,
    color: CColors.white,
  },
  border: {
    borderLeftColor: CColors.gray,
    borderLeftWidth: 0.3,
    borderRightColor: CColors.gray,
    borderRightWidth: 0.3,
    borderTopColor: CColors.green,
    borderTopWidth: 3,
  },
});
export default styles;
