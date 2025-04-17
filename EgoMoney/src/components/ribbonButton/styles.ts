import { StyleSheet } from 'react-native';
import { Colors } from '../styles';
import { iOSUIKit } from 'react-native-typography';

const styles = StyleSheet.create({
  container: {
    width: 75,
    height: 75,
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 75,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.primaryColors.charcoal,
  },
  buttonCircle: {
borderWidth: 1,
borderColor: Colors.primaryColors.black,
alignItems: 'center',
borderRadius: 50,
height: 60,
width: 60,
alignContent: 'center',
justifyContent: 'center',
backgroundColor: Colors.primaryColors.tintedWhite,
  },
  buttonHolder: {
width: 60,
alignContent: 'center',
justifyContent: 'center',
  },
  title: {
    ...iOSUIKit.title3EmphasizedObject,
    alignSelf: 'center',
    width: '100%',
    fontSize: 14,
    marginTop: 0,
    color: Colors.primaryColors.black,
    textAlign: 'center',
  },
});

export default styles;
