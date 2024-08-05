import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import FavoritesScreen from '../screens/FavoritesScreen';
import HomeScreen from '../screens/HomeScreen';
import {ScreenName} from '../utils/enums';
import strings from '../utils/strings';

const Tab = createBottomTabNavigator();

interface TabScreenOptions {
  headerTitle: string;
  tabBarLabel: string;
}

const screenOptions = {
  [ScreenName.Home]: {
    headerTitle: strings.homeScreenTitle,
    tabBarLabel: strings.homeScreenTab,
  } as TabScreenOptions,
  [ScreenName.Favorites]: {
    headerTitle: strings.favoriteScreenTitle,
    tabBarLabel: strings.favoriteScreenTab,
  } as TabScreenOptions,
};

const HomeNavigator: React.FC = () => {
  return (
    <Tab.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      {Object.entries(screenOptions).map(([name, options]) => (
        <Tab.Screen
          key={name}
          name={name as keyof typeof ScreenName}
          component={name === ScreenName.Home ? HomeScreen : FavoritesScreen}
          options={options}
        />
      ))}
    </Tab.Navigator>
  );
};

export default HomeNavigator;
