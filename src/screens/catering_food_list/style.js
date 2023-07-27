import {StyleSheet} from 'react-native';
import CColors from '../../color/CColors';
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: CColors.white},
  modelHero: {
    backgroundColor: CColors.white,
    marginBottom: 30,
    borderRadius: 15,
    paddingVertical: 25,
  },
  modalDiv: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  countingContainer: {
    justifyContent: 'center',
    paddingVertical: 30,
  },
  buttonContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: CColors.white,
    height: '35%',
    width: '46%',
    shadowColor: CColors.black,
    justifyContent: 'center',
  },
  buttonText: {color: CColors.black},
  selectedButton: {
    backgroundColor: CColors.green,
    height: '35%',
    width: '46%',
    shadowColor: CColors.black,
    justifyContent: 'center',
  },
  selectedButtonText: {color: CColors.white},
  itemContainer: {flex: 7.5, flexDirection: 'row'},
  foodContainer: {
    backgroundColor: CColors.pure_white,
    marginBottom: 10,
    marginRight: 10,
    borderRadius: 10,
    padding: 10,
  },
  image: {
    height: 110,
    width: 135,
    borderRadius: 10,
  },
});
export default styles;
