import {StyleSheet} from 'react-native';
import CColors from '../../color/CColors';
const styles = StyleSheet.create({
  container: {
    //flex: 2,
    backgroundColor: CColors.white,
    padding: 20,
    borderRadius: 20,
    borderTopColor: CColors.green,
    borderTopWidth: 3,
    flexDirection: 'row',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'space-between',

    //shadow
    shadowColor: CColors.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 7,
  },
  containerLeft: {},
  containerRight: {},
});
export default styles;
