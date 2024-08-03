import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {addFavorite} from '../../store/favoritesSlice';
import strings from '../../utils/strings';
import {IAddBookParams} from '../../utils/types';

const AddBookBtn = (props: IAddBookParams) => {
  const {book} = props;
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      style={styles.favoriteButton}
      onPress={() => dispatch(addFavorite(book))}>
      <Text style={styles.favoriteButtonText}>{strings.favorite_add}</Text>
    </TouchableOpacity>
  );
};

export default AddBookBtn;

const styles = StyleSheet.create({
  favoriteButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  favoriteButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});
