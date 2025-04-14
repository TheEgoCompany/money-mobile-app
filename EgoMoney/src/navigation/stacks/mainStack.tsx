import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
  StackScreenProps,
} from '@react-navigation/stack';

import { EgoPayHomeScreen } from '../../screens/egopay/egoPayHomeScreen';


export type MainStackParamList = {
  EgoPayHomeScreen: undefined;
};

export type MainStackNavigationProp<
  Route extends keyof MainStackParamList,
> = StackNavigationProp<MainStackParamList, Route>;

export type MainStackScreenProps<
  Route extends keyof MainStackParamList,
> = StackScreenProps<MainStackParamList, Route>;

const Stack = createStackNavigator<MainStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="EgoPayHomeScreen"
    >
      <Stack.Screen
	name="EgoPayHomeScreen"
	component={EgoPayHomeScreen}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
