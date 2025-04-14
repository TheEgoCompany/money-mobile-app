import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const OnboardingLandingScreen: React.FC = () => {

  return (
    <View style={styles.container}
    >
	<Text style={styles.text}>Onboarding Landing Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
	container: {
	flex: 1,
	alignContent: 'center',
	justifyContent: 'center',
	},
	text: {
		textAlign: 'center',
		width: '100%',
	},
      });

