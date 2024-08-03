import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import React from 'react';
import BookDetailsScreen from '../screens/BookDetailsScreen';
import Splash from '../screens/Splash';
import {ScreenName} from '../utils/enums';
import HomeNavigator from './HomeNavigator';
import {navigationRef} from './navigationRef';
import {AppNavigationParams} from '../utils/types';
import strings from '../utils/strings';
import ErrorScreen from '../screens/ErrorScreen';

const Stack = createStackNavigator<AppNavigationParams>();
const navigatorParams: {
  screenOptions: StackNavigationOptions;
  initialRouteName: keyof AppNavigationParams;
} = {
  screenOptions: {
    headerShown: false,
    gestureEnabled: false,
    animationEnabled: true,
    headerTitleAlign: 'center',
  },
  initialRouteName: ScreenName.Splash,
};
const AppNavigator = () => (
  <NavigationContainer ref={navigationRef}>
    <Stack.Navigator {...navigatorParams}>
      <Stack.Screen name={ScreenName.Splash} component={Splash} />
      <Stack.Screen
        name={ScreenName.BookDetailsScreen}
        component={BookDetailsScreen}
        options={{
          headerShown: true,
          headerTitle: strings.bookDetailsScreenTitle,
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen name={ScreenName.HomeScreen} component={HomeNavigator} />
      <Stack.Screen name={ScreenName.ErrorScreen} component={ErrorScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
