import { StyleSheet } from 'react-native';
import { Colors } from '../styles';
import { iOSUIKit } from 'react-native-typography';

const styles = StyleSheet.create({
  container: {

    paddingVertical: 10,
    paddingLeft: 20,
    paddingRight: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Colors.primaryColors.silver,
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    paddingHorizontal: 0,
    flexDirection: 'row',
    backgroundColor: Colors.primaryColors.pureWhite,
  },
});

export default styles;