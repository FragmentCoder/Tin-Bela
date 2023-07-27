import {StyleSheet} from 'react-native';
import CColors from '../../color/CColors';
const styles = StyleSheet.create({
  cardConatiner: {
    width: '48%',
    backgroundColor: CColors.pure_white,
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  image: {
    height: 110,
    width: 135,
    borderRadius: 10,
  },
  text: {fontSize: 16},
  title: {marginVertical: 20, fontSize: 16, color: CColors.green},
  emptyComponent: {
    paddingVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  headerTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: CColors.gray,
    borderBottomWidth: 0.5,
    marginBottom: 10,
  },
  itemText: {
    color: CColors.black,
    fontSize: 18,
    marginVertical: 20,
  },
  buttonStyles: {
    marginVertical: 80,
    paddingVertical: 15,
    borderRadius: 50,
    backgroundColor: CColors.green,
  },
  buttonTextStyles: {
    fontSize: 20,
    color: CColors.white,
  },
});
export default styles;
