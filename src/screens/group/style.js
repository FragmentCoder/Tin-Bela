import {StyleSheet} from 'react-native';
import CColors from '../../color/CColors';
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: CColors.white, marginBottom: 50},
  groupCodeTextContainer: {flexDirection: 'row', alignItems: 'center'},
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    alignItems: 'center',
  },
  copyTextButton: {
    backgroundColor: CColors.white,
    borderRadius: 10,
    borderColor: CColors.gray,
    borderWidth: 0.5,
    alignItems: 'center',
    padding: 2,
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: CColors.white,
  },
  image0: {right: -55},
  image1: {
    right: -45,
  },
  image2: {
    right: -35,
  },
  image3: {
    right: -25,
  },
  fiveContainer: {
    backgroundColor: CColors.green,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
    borderRadius: 50,
    right: -10,
    borderWidth: 2,
    borderColor: CColors.white,
  },
  addUser: {
    backgroundColor: CColors.gray,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: CColors.white,
  },
  totalItem: {
    backgroundColor: CColors.light_green,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  divCommonStyle: {
    backgroundColor: CColors.light_green,
    padding: 10,
    borderRadius: 20,
    marginVertical: 10,
  },
  demoMeal: {
    flexDirection: 'row',
    paddingVertical: 20,
    width: '48%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 7,
  },
  cateringTotalItem: {
    marginVertical: 20,
    borderLeftWidth: 0.1,
    borderColor: CColors.black,
    borderRightWidth: 0.1,
    borderTopColor: CColors.green,
    borderTopWidth: 3,
  },
});
export default styles;
