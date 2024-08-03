import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {removeFavorite} from '../../store/favoritesSlice';
import strings from '../../utils/strings';
import {IRemoveBookParams} from '../../utils/types';

const RemoveBookBtn = (props: IRemoveBookParams) => {
  const {index} = props;
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      style={styles.removeButton}
      onPress={() => dispatch(removeFavorite(index))}>
      <Text style={styles.removeButtonText}>{strings.favorite_remove}</Text>
    </TouchableOpacity>
  );
};

export default RemoveBookBtn;

const styles = StyleSheet.create({
  removeButton: {
    backgroundColor: '#e63946',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
