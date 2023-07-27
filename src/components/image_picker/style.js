import {StyleSheet} from 'react-native';
import CColors from '../../color/CColors';
const styles = StyleSheet.create({
  container: {
    borderColor: CColors.green,
    borderWidth: 2,
    borderRadius: 20,
    height: 120,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 10,
  },
  image: {
    height: 120,
    width: 120,
    borderColor: CColors.green,
    borderWidth: 3,
    borderRadius: 20,
  },
  defaultImage: {
    height: 80,
    width: 80,
  },
});
export default styles;
