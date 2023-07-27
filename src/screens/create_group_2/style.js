import {StyleSheet} from 'react-native';
import CColors from '../../color/CColors';

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  inputText: {
    flex: 1,
  },
  checkBox: {
    flexDirection: 'row',
    flex: 2,
  },
  buttonContiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '100%',
    alignItems: 'center',
    padding: 10,
    borderRadius: 50,
  },
});
export default styles;
