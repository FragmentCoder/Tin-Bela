import {StyleSheet} from 'react-native';
import CColors from '../../../color/CColors';
const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 15,
    backgroundColor: CColors.white,
    borderRadius: 10,
    paddingHorizontal: 10,
    //shadow
    shadowColor: CColors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
  },
  image: {
    height: 110,
    width: 135,
    borderRadius: 10,
  },
  midDiv: {flex: 1, justifyContent: 'space-around', marginLeft: 10},

  icon: {
    marginRight: 0,
    margin: 0,
    padding: 0,
    backgroundColor: 'transparent',
  },
});
export default styles;
