import {StyleSheet} from 'react-native';
import CColors from '../../color/CColors';
const styles = StyleSheet.create({
  container: {
    backgroundColor: CColors.white,
    marginVertical: 10,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 3,

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

  firstContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomColor: CColors.gray,
    borderBottomWidth: 0.5,
    marginBottom: 10,
  },
  imageContainer: {flex: 1.3, alignItems: 'center'},
  headerTextContainer: {flex: 5, alignItems: 'center'},
  checkBoxContainer: {flex: 1, alignItems: 'center'},

  secondContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    //backgroundColor: CColors.red,
  },
  thirdContainer: {flexDirection: 'row', justifyContent: 'space-evenly'},
  foodImage: {
    height: 70,
    width: 70,
    borderRadius: 50,
  },

  icon: {
    marginRight: 0,
    margin: 0,
    padding: 0,
    backgroundColor: 'transparent',
  },
  image: {
    height: 50,
    width: 50,
    borderWidth: 1,
    borderColor: CColors.black,
    borderRadius: 50,
  },
  lastContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  imageText: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default styles;
