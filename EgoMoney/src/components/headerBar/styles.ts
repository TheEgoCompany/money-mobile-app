import { StyleSheet } from 'react-native';
import { iOSUIKit } from 'react-native-typography';
import { systemWeights } from 'react-native-typography'

import { Colors } from '../styles';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 370,
    paddingHorizontal: 0,
    paddingTop: 40,
    backgroundColor: Colors.primaryColors.black,
    borderBottomWidth: 2,
    borderBottomColor: Colors.primaryColors.egoGold,
    shadowColor: Colors.primaryColors.egoGold,
    shadowRadius: 180,
    shadowOffset: {width: 10, height: 30},
    shadowOpacity: 1,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  columnContainer: {
    flexDirection: 'column',
    width: '100%',
  },
  avatarContainer: {
  position: 'absolute',
  right: -10,
  top: 10,
  },
  heroTitle: {
    ...iOSUIKit.largeTitleEmphasizedObject,
    fontSize: 56,
    lineHeight: 56,
    marginTop: 12,
    color: Colors.primaryColors.silver,
    textAlign: 'center',
  },
  heroSubtitle: {
	...iOSUIKit.largeTitleEmphasizedObject,
	...systemWeights.light,
	fontSize: 28,
	marginTop: -15,
	color: Colors.primaryColors.egoGold,
	textAlign: 'center',
  },
  dateStrip: {
    ...iOSUIKit.footnoteEmphasizedObject,
    marginTop: 5,
    textTransform: 'uppercase',
    fontSize: 12,
    color: Colors.primaryColors.silver,
    textAlign: 'center',
  },
});

export default styles;
