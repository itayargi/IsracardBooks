import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {addFavorite} from '../store/favoritesSlice';
import {ICustomNavigationFunctionComponent} from '../utils/types';

const BookDetailsScreen: ICustomNavigationFunctionComponent = ({route}) => {
  const dispatch = useDispatch();
  const {book} = route.params;

  return (
    <View>
      <Image source={{uri: book.cover}} style={{width: 100, height: 150}} />
      <Text>{book.title}</Text>
      <Text>{book.releaseDate}</Text>
      <Text>{book.description}</Text>
      <Text>{book.pages}</Text>
      <TouchableOpacity onPress={() => dispatch(addFavorite(book))}>
        <Text>Add to Favorites</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BookDetailsScreen;
