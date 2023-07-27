import {StyleSheet} from 'react-native';
import CColors from '../../color/CColors';
const styles = StyleSheet.create({
  button1: {
    borderRadius: 30,
    padding: 15,
    alignItems: 'center',
    backgroundColor: CColors.green,
    marginVertical: 10,
    width: '100%',
  },
  button2: {
    borderRadius: 30,
    padding: 15,
    alignItems: 'center',
    backgroundColor: CColors.orange,
    width: '100%',
  },
  buttonText: {
    fontSize: 18,
    color: CColors.white,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headingText: color => {
    return {fontSize: 20, marginBottom: 10, color: color};
  },
  titleText: {fontSize: 22, color: CColors.purple, marginTop: 5},
  textGroup: {flex: 1, alignItems: 'baseline', justifyContent: 'center'},
  lastDiv: {flex: 1.5, alignItems: 'center', justifyContent: 'center'},
});
export default styles;
