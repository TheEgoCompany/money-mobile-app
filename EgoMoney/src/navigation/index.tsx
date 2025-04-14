import React from 'react';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
  StackScreenProps,
  TransitionPresets,
} from '@react-navigation/stack';
import OnboardingStack, {OnboardingStackParamList}from './stacks/onboardingStack';
import { RootNavigator } from './utils';

export type RootStackParamList = {
	Onboarding: NavigatorScreenParams<OnboardingStackParamList>;
      };

export type RootStackNavigationProps<Route extends keyof RootStackParamList> =
      StackNavigationProp<RootStackParamList, Route>;

export type RootStackScreenProps<Route extends keyof RootStackParamList> =
      StackScreenProps<RootStackParamList, Route>;

      const Stack = createStackNavigator<RootStackParamList>();

      export const Navigation = () => {

	return (
	<NavigationContainer ref={RootNavigator.ref}>
	<AppNavigator/>
	</NavigationContainer>
	);
      };

      const AppNavigator = () => {

	return (
	<Stack.Navigator
	initialRouteName={'Onboarding'}
	screenOptions={{ headerShown: false }}
	>
	<Stack.Screen
	name="Onboarding"
	component={OnboardingStack}
	options={{
	...TransitionPresets.ModalPresentationIOS,
	title: 'onboarding',
	}}
	/>
	</Stack.Navigator>
	);
      };
