import {StyleSheet} from 'react-native';
import CColors from '../../color/CColors';
const styles = StyleSheet.create({
  container: {flex: 1},
  card: {
    width: '47.5%',
    backgroundColor: CColors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingVertical: 10,

    //shadow
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 7,
  },
  day: {color: CColors.black, fontSize: 16},
  date: {color: CColors.gray, fontSize: 11, marginVertical: 5},
  twoCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  offDay: {
    backgroundColor: CColors.black,
    marginVertical: 5,
    color: CColors.white,
    padding: 6,
    borderRadius: 10,
  },
  checkBox: {
    flexDirection: 'row',
  },

  button: {borderRadius: 10, backgroundColor: CColors.green},
});
export default styles;
