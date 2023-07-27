import {StyleSheet} from 'react-native';
import CColors from '../../color/CColors';
const styles = StyleSheet.create({
  container: h => {
    return {
      backgroundColor: CColors.pure_white,
      height: h / 11,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',

      //shadow
      shadowColor: CColors.black,
      shadowOffset: {
        width: 0,
        height: 16,
      },
      shadowOpacity: 0.25,
      shadowRadius: 18.46,
      elevation: 22,
    };
  },
  subContainer: {alignItems: 'center', flex: 1},
});
export default styles;
