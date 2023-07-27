import {StyleSheet} from 'react-native';
import CColors from '../../color/CColors';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: CColors.gray,
    borderBottomWidth: 0.8,
  },
  itemContainer: {
    padding: 10,
    borderColor: CColors.black,
    borderWidth: 0.8,
  },
  text: {color: CColors.black, fontSize: 18},
});
export default styles;
