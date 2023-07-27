import {StyleSheet} from 'react-native';
import CColors from '../../color/CColors';
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: CColors.white, padding: 20},
  firstDiv: {
    flex: 1,
  },
  secondDiv: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  firstInput: {
    width: '20%',
  },
  secondInput: {
    width: '70%',
  },
  thirdDiv: {
    marginTop: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  buttonStyle: {
    borderRadius: 50,
    width: 80,
    height: 80,
    paddingLeft: 10,
  },
});
export default styles;
