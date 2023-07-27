import {StyleSheet} from 'react-native';
import CColors from '../../color/CColors';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  textContiner: {
    padding: 8,
    marginHorizontal: 10,
    paddingHorizontal: 8,
    borderWidth: 0.5,
    borderRadius: 50,
    borderColor: CColors.gray,
  },
});
export default styles;
