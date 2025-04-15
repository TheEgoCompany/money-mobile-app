import { StyleSheet } from 'react-native';
import { Colors } from '../styles';
import { iOSUIKit } from 'react-native-typography';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 75,
    borderWidth: 1,
    borderColor: Colors.primaryColors.egoGold,
  },
  title: {
    ...iOSUIKit.caption2EmphasizedObject,
    fontSize: 12,
    marginTop: 5,
    color: Colors.primaryColors.silver,
    textAlign: 'center',
  },
});

export default styles;
