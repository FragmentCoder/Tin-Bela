import {StyleSheet} from 'react-native';
import CColors from '../../color/CColors';
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: CColors.green,
    borderRadius: 5,
    paddingHorizontal: 8,
    alignItems: 'center',
    //shadow
    shadowColor: CColors.green,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});
export default styles;
