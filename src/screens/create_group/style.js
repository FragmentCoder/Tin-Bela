import {StyleSheet} from 'react-native';
import CColors from '../../color/CColors';
const styles = StyleSheet.create({
  container: {flex: 1, padding: 20, backgroundColor: CColors.white},
  inputText: {flexDirection: 'row', justifyContent: 'space-between'},
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
});
export default styles;
