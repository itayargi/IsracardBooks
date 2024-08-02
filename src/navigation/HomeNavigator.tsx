import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import FavoritesScreen from '../screens/FavoritesScreen';
import HomeScreen from '../screens/HomeScreen';
import {ScreenName} from '../utils/enums';
import strings from '../utils/strings';

const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <Tab.Screen
        name={ScreenName.Home}
        component={HomeScreen}
        options={{
          headerTitle: strings.homeScreenTitle,
          tabBarLabel: strings.homeScreenTab,
        }}
      />
      <Tab.Screen
        name={ScreenName.Favorites}
        component={FavoritesScreen}
        options={{
          headerTitle: strings.favoriteScreenTitle,
          tabBarLabel: strings.favoriteScreenTab,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
