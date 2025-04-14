import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
  StackScreenProps,
} from '@react-navigation/stack';

import { OnboardingLandingScreen } from '../../screens/onboarding/onboardingLandingScreen';


export type OnboardingStackParamList = {
  OnboardingLanding: undefined;
};

export type OnboardingStackNavigationProp<
  Route extends keyof OnboardingStackParamList,
> = StackNavigationProp<OnboardingStackParamList, Route>;

export type OnboardingStackScreenProps<
  Route extends keyof OnboardingStackParamList,
> = StackScreenProps<OnboardingStackParamList, Route>;

const Stack = createStackNavigator<OnboardingStackParamList>();

const OnboardingStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="OnboardingLanding"
    >
      <Stack.Screen
        name="OnboardingLanding"
        component={OnboardingLandingScreen}
      />
    </Stack.Navigator>
  );
};

export default OnboardingStack;
