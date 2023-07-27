import {StyleSheet} from 'react-native';
import CColors from '../../color/CColors';
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: CColors.white},
  firstDiv: {flex: 1, justifyContent: 'center'},
  secondDiv: {flex: 1},
  text: {color: CColors.green, fontSize: 38, textAlign: 'center'},
});
export default styles;
