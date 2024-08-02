import {RouteProp} from '@react-navigation/native';
import {Book} from '../store/booksSlice';
import { StackNavigationProp } from '@react-navigation/stack';
import { ReactNode } from 'react';

export interface IBaseComponentProps {
    navigation: StackNavigationProp<any>; // you can use a more specific type than 'any' based on your routes configuration
    route: RouteProp<any, any>; // you can use a more specific type than 'any' based on your routes configuration
  }
  
  export interface ICustomNavigationFunctionComponent<T = any> {
    (props: T & IBaseComponentProps): ReactNode;
  }