import {StyleSheet} from 'react-native';
import CColors from '../../color/CColors';
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: CColors.white},
  button: {alignItems: 'flex-end', marginRight: 13},
  firstDiv: {flex: 1, justifyContent: 'center'},
  secondDiv: {flex: 1, alignItems: 'stretch'},
  secondDiv01: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  secondDiv02: {
    flex: 1,
    justifyContent: 'center',
  },
  secondDiv03: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  iconDiv: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  buttonStyles: {
    backgroundColor: CColors.white,
    borderRadius: 23,
    width: '90%',
  },
  textStyles: fontSize => {
    a = fontSize / 1.090909;
    return {
      color: CColors.green,
      textAlign: 'center',
      fontSize: a,
    };
  },
});
export default styles;
