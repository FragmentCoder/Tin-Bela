import {StyleSheet} from 'react-native';
import CColors from '../../color/CColors';
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: CColors.white},

  buttonContainer: {
    flex: 1.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: CColors.white,
    height: '60%',
    width: '46%',
    shadowColor: CColors.black,
    justifyContent: 'center',
  },
  buttonText: {color: CColors.black},
  selectedButton: {
    backgroundColor: CColors.green,
    height: '60%',
    width: '46%',
    shadowColor: CColors.black,
    justifyContent: 'center',
  },
  selectedButtonText: {color: CColors.white},
  itemContainer: {flex: 6.5, marginBottom: 50},
  billsContainer: {
    //shadow
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.23,
    shadowRadius: 12.81,
    elevation: 6,
    //
    borderTopColor: CColors.green,
    borderTopWidth: 5,
    borderRightColor: CColors.gray,
    borderRightWidth: 0.2,
    borderLeftColor: CColors.gray,
    borderLeftWidth: 0.2,
    marginBottom: 20,
  },
  textContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: CColors.light_gray,
    paddingVertical: 25,
    paddingHorizontal: 10,
  },
  payHandButton: color => {
    return {
      backgroundColor: color,
      marginVertical: 10,
      padding: 15,
      borderRadius: 50,
      shadowColor: color,
    };
  },
  payHandText: {
    fontSize: 20,
    color: CColors.white,
  },
});
export default styles;
