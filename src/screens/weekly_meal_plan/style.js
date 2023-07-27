import {StyleSheet} from 'react-native';
import CColors from '../../color/CColors';
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: CColors.white},
  date: {
    color: CColors.green,
    textAlign: 'center',
    marginBottom: 5,
    fontSize: 15,
  },
  text: {color: CColors.black, fontSize: 16, marginTop: 5},
});
export default styles;
