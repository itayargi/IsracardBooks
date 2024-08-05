import React from 'react';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BookDetailsScreen from '../screens/BookDetailsScreen';
import Splash from '../screens/Splash';
import HomeNavigator from './HomeNavigator';
import ErrorScreen from '../screens/ErrorScreen';
import {ScreenName} from '../utils/enums';
import strings from '../utils/strings';
import {navigationRef} from './navigationRef';

type AppNavigationParams = {
  [ScreenName.Splash]: undefined;
  [ScreenName.BookDetailsScreen]: undefined;
  [ScreenName.HomeScreen]: NavigatorScreenParams<typeof HomeNavigator>;
  [ScreenName.ErrorScreen]: undefined;
};

const Stack = createStackNavigator<AppNavigationParams>();

const screenOptions = {
  headerShown: false,
  gestureEnabled: false,
  animationEnabled: true,
  headerTitleAlign: 'center' as const,
};

const AppNavigator: React.FC = () => (
  <NavigationContainer ref={navigationRef}>
    <Stack.Navigator
      initialRouteName={ScreenName.Splash}
      screenOptions={screenOptions}>
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
