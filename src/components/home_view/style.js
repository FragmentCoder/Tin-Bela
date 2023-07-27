import {StyleSheet} from 'react-native';
import CColors from '../../color/CColors';
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: CColors.white},
  textContainer: {
    borderLeftWidth: 5,
    borderLeftColor: CColors.green,
    paddingLeft: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    color: CColors.green,
    fontSize: 16,
    paddingVertical: 5,
  },

  title: color => {
    return {
      color: color,
      fontSize: 14,
      paddingVertical: 5,
    };
  },

  renderItemContainer: {
    paddingVertical: 10,
    flex: 1,
    backgroundColor: CColors.pure_white,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  renderItemCateringContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomColor: CColors.gray,
    borderBottomWidth: 0.3,
  },
  renderItemCateringImage: {
    height: 50,
    width: 50,
    borderRadius: 50,
    borderColor: CColors.black,
    borderWidth: 1,
  },
  listItemContainer: {flexDirection: 'row', flexWrap: 'wrap'},
  listItemTitle: {fontSize: 16, marginVertical: 10},
  listItemCheckboxContainer: {width: '50%', alignItems: 'flex-start'},

  feedbackModalContainer: {
    paddingHorizontal: 20,
    paddingBottom: 50,
    paddingTop: 30,
    backgroundColor: CColors.white,
    borderRadius: 20,
  },
  feedbackModalTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mealOffRenderItem2Container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '100%',
    paddingVertical: 10,
  },
  foodName: {color: CColors.gray, fontSize: 11},
  otherDayMealOffContainer: {
    backgroundColor: CColors.white,
    paddingVertical: 30,
    borderRadius: 20,
  },
  otherDayMealOffText: {
    paddingLeft: 20,
    fontSize: 20,
    color: CColors.black,
    paddingBottom: 20,
  },
});
export default styles;
