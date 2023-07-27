import {StyleSheet} from 'react-native';
import CColors from '../../color/CColors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CColors.white,
  },
  button: {
    padding: 14,
    borderRadius: 30,
    alignItems: 'center',
  },
  imageContainer: {
    alignSelf: 'center',
    padding: 30,
    borderColor: CColors.green,
    borderWidth: 2,
    borderRadius: 30,
    marginVertical: 15,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 15,
  },
});
export default styles;
