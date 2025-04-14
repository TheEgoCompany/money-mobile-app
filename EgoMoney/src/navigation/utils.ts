import { createNavigationContainerRef } from '@react-navigation/native';

import { RootStackParamList } from '.';

const ref = createNavigationContainerRef<RootStackParamList>();

const landing = () => ref.current?.navigate('Onboarding', {screen: 'OnboardingLanding'});

export const RootNavigator = {
  landing,
  navigate: ref?.navigate,
  ref,
};
