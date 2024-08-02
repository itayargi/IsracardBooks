import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import BookDetailsScreen from '../screens/BookDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import HomeScreen from '../screens/HomeScreen';
import Splash from '../screens/Splash';
import {ScreenName} from '../utils/enums';
import {navigationRef} from './navigationRef';
export type AppNavigationParams = {
  Splash: undefined;
  HomeScreen: undefined;
  BookDetailsScreen: undefined;
};

const Stack = createStackNavigator<AppNavigationParams>(); // <-- adding type here

const Tab = createBottomTabNavigator();
const HomeNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name={ScreenName.Home} component={HomeScreen} />
    <Tab.Screen name={ScreenName.Favorites} component={FavoritesScreen} />
  </Tab.Navigator>
);
const AppNavigator = () => (
  <NavigationContainer ref={navigationRef}>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        animationEnabled: true,
      }}
      initialRouteName={ScreenName.Splash}>
      <Stack.Screen name={ScreenName.Splash} component={Splash} />
      <Stack.Screen
        name={ScreenName.BookDetailsScreen}
        component={BookDetailsScreen}
        options={{headerShown:true}}
      />
      <Stack.Screen name={ScreenName.HomeScreen} component={HomeNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
