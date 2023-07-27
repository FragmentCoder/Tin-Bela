import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: height => {
    return {height: height / 12, marginTop: 20};
  },
  gradiant: {
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
