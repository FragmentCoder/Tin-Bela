import {StyleSheet} from 'react-native';
import CColors from '../../../color/CColors';
const styles = StyleSheet.create({
  foodContainer: {
    backgroundColor: CColors.pure_white,
    marginBottom: 10,
    marginRight: 10,
    borderRadius: 10,
    padding: 10,
  },
  image: {
    height: 110,
    width: 135,
    borderRadius: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    marginRight: 0,
    margin: 0,
    padding: 0,
    backgroundColor: 'transparent',
  },
});
export default styles;
