import {StyleSheet} from 'react-native';
import CColors from '../../color/CColors';
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: CColors.white, padding: 20},
  textContainer: {flex: 0.5},
  itemContainerDiv: {
    flex: 4,
    justifyContent: 'space-around',
  },
  buttonContainer: {
    flex: 1,
  },
});
export default styles;
