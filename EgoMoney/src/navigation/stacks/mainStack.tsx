import React from 'react';
import Icon from '@react-native-vector-icons/ionicons';
import { RootStackScreenProps } from 'src/navigation';
import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {Colors} from '../../styles/colors';
import { iOSUIKit } from 'react-native-typography';

import { EgoPayHomeScreen } from '../../screens/egopay/egoPayHomeScreen';
import { EgoWalletHomeScreen } from '../../screens/wallet/egoWalletHomeScreen';
import { EgoSocialHomeScreen } from '../../screens/social/egoSocialHomeScreen';
import { EgoShoppingHomeScreen } from '../../screens/shopping/egoShoppingHomeScreen';
import { EgoRewardsHomeScreen } from '../../screens/rewards/egoRewardsHomeScreen';

import { Image, StyleSheet, View } from 'react-native';

export type MainTabStackParamList = {
  EgoWalletHomeScreen: undefined;
  EgoSocialHomeScreen: undefined;
  EgoPayHomeScreen: undefined;
  EgoShoppingHomeScreen: undefined;
  EgoRewardsHomeScreen: undefined;
};

export type MainTabStackNavigationProp<
  Route extends keyof MainTabStackParamList,
> = BottomTabNavigationProp<MainTabStackParamList, Route>;

export type MainTabStackScreenProps<Route extends keyof MainTabStackParamList> =
  BottomTabScreenProps<MainTabStackParamList, Route>;

const Tab = createBottomTabNavigator<MainTabStackParamList>();

const MainStack: React.FC<RootStackScreenProps<'Main'>> = () => {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
    initialRouteName="EgoPayHomeScreen"
    backBehavior="none"
    screenOptions={{
      tabBarActiveTintColor: Colors.charcoalBlack,
      tabBarInactiveTintColor: Colors.middleGrey,
      tabBarActiveBackgroundColor: Colors.pureWhite,
      tabBarInactiveBackgroundColor: Colors.pureWhite,
      headerShown: false,
      tabBarBadgeStyle: {
        marginTop: insets.bottom,
      },
      tabBarStyle: {
        marginBottom: 0,
        paddingBottom: 0,
        paddingTop: 6,
        shadowColor: Colors.middleGrey,
        shadowRadius: 25,
        shadowOpacity: 1,
        shadowOffset: {
          width: 10,
          height: 10,
        },
        backgroundColor: Colors.pureWhite,
        borderTopColor: Colors.softGrey,
        borderTopWidth: 2,
      },
      tabBarLabelStyle: iOSUIKit.caption2Emphasized,
    }}
  >
    <Tab.Screen
      name="EgoWalletHomeScreen"
      component={EgoWalletHomeScreen}
      options={{
        tabBarIcon: ({ color, focused }) => (
          <Icon name={focused ? 'wallet' : 'wallet-outline'} size={28} color={color}/>
        ),
        tabBarLabel: 'Wallet',
        tabBarLabelStyle: { ...iOSUIKit.caption2EmphasizedObject, fontSize: 12, paddingTop: 6 },
      }}
    />
    <Tab.Screen
      name="EgoSocialHomeScreen"
      component={EgoSocialHomeScreen}
      options={{
        tabBarIcon: ({ color, focused }) => (
          <Icon name={focused ? 'person-circle' : 'person-circle-outline'} size={28} color={color}/>
        ),
        tabBarLabel: 'Social',
        tabBarLabelStyle: { ...iOSUIKit.caption2EmphasizedObject, fontSize: 12, paddingTop: 6 },
      }}
    />
    <Tab.Screen
      name="EgoPayHomeScreen"
      component={EgoPayHomeScreen}
      options={{
        tabBarIcon: () => ( 
        <View style={styles.homeTabBarIcon}>
        <Image style={styles.payIcon} source={require('../../assets/images/tabIcon.png')} />
          </View>
        ),
        tabBarLabel: 'Pay',
        tabBarLabelStyle: { ...iOSUIKit.caption2EmphasizedObject, fontSize: 14 },
      }}
    />
            <Tab.Screen
      name="EgoShoppingHomeScreen"
      component={EgoShoppingHomeScreen}
      options={{
        tabBarIcon: ({ color, focused }) => (
          <Icon name={focused ? 'pricetags' : 'pricetags-outline'} size={28} color={color}/>
        ),
        tabBarLabel: 'Shop',
        tabBarLabelStyle: { ...iOSUIKit.caption2EmphasizedObject, fontSize: 12, paddingTop: 6 },
      }}
    />
    <Tab.Screen
      name="EgoRewardsHomeScreen"
      component={EgoRewardsHomeScreen}
      options={{
        tabBarIcon: ({ color, focused }) => (
          <Icon name={focused ? 'gift' : 'gift-outline'} size={28} color={color}/>
        ),
        tabBarLabel: 'Rewards',
        tabBarLabelStyle: { ...iOSUIKit.caption2EmphasizedObject, fontSize: 12, paddingTop: 6 },
      }}
    />
  </Tab.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({
  homeTabBarIcon: {
    top: -40,
    shadowColor: Colors.middleGrey,
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    }
  },
  payIcon: {
    width: 120,
    height: 120,
  },
  walletIcon: {
    width: 20,
    height: 20,
  },
  tabLabel: {

  },
});