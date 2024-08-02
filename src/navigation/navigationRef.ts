import {createNavigationContainerRef} from '@react-navigation/native';
import {ScreenName} from '../utils/enums';
import {AppNavigationParams} from './AppNavigator';

export const navigationRef =
  createNavigationContainerRef<AppNavigationParams>();

//navigation function
export const navigate = (route: ScreenName, params?: any) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(route, params);
  }
};

//reset older screen and navigate

export const resetAndNavigate = (route: ScreenName, params = {}) => {
  if (navigationRef.isReady()) {
    navigationRef.reset({
      index: 0,
      routes: [{name: route, params}],
    });
  }
};

export const getCurrentRoute = () => {
  if (!navigationRef.isReady()) {
    return undefined;
  }
  let route: any = navigationRef.getRootState();
  while ('routes' in route) {
    // Traverse through the nested routes
    route = route.routes[route.index ?? 0];
  }
  return route?.name;
};
