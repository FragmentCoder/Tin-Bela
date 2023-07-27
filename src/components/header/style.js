import {StyleSheet} from 'react-native';
import CColors from '../../color/CColors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: CColors.white,
  },
  iconContainer: {flex: 2, alignItems: 'center', justifyContent: 'center'},
  childrenContainer: Cheight => {
    return {
      height: Cheight - Cheight / 30,
      padding: 20,
      backgroundColor: CColors.white,
    };
  },
  childrenContainerNav: Cheight => {
    return {
      height: Cheight - Cheight / 6.2,
      padding: 20,
      backgroundColor: CColors.white,
    };
  },
  text: {flex: 6, alignItems: 'center'},
});
export default styles;
/* import {StyleSheet} from 'react-native';
import CColors from '../../color/CColors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: CColors.white,
  },
  iconContainer: {flex: 2, alignItems: 'center', justifyContent: 'center'},
  childrenContainer: Cheight => {
    return {
      height: Cheight - Cheight / 30,
      padding: 20,
    };
  },
  childrenContainerNav: Cheight => {
    return {
      height: Cheight - Cheight / 6.2,
      padding: 20,
    };
  },
  text: {flex: 6, alignItems: 'center'},
});
export default styles;
 */
