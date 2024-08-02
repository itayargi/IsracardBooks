import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ReactNode} from 'react';

export interface IBaseComponentProps {
  navigation: StackNavigationProp<any>; // you can use a more specific type than 'any' based on your routes configuration
  route: RouteProp<any, any>; // you can use a more specific type than 'any' based on your routes configuration
}

export interface ICustomNavigationFunctionComponent<T = any> {
  (props: T & IBaseComponentProps): ReactNode;
}

export type AppNavigationParams = {
  Splash: undefined;
  HomeScreen: undefined;
  BookDetailsScreen: undefined;
  FavoriteScreen: undefined;
};

export interface Book {
  index: number;
  title: string;
  releaseDate: string;
  cover: string;
  description?: string;
  pages?: number;
  originalTitle: string;
}
export interface BookCardProps extends Partial<Book> {
  onPress: () => void;
}
