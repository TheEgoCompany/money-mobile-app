import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderBar from '../../components/headerBar';

export const EgoShoppingHomeScreen: React.FC = () => {
const title = 'shop';
  return (
    <View style={styles.container}
    >
		<HeaderBar
    highlightTitle = {'EGO'}
      title = {title}
      showBackButton = {false}
      />
	<Text style={styles.text}>Ego Shopping Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
	container: {
	flex: 1,
	alignContent: 'center',
	},
	text: {
		textAlign: 'center',
		width: '100%',
	},
      });
