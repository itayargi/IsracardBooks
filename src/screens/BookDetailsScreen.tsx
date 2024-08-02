import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';
import {addFavorite, isFavorite} from '../store/favoritesSlice';
import {ICustomNavigationFunctionComponent} from '../utils/types';
import strings from '../utils/strings';

const BookDetailsScreen: ICustomNavigationFunctionComponent = ({route}) => {
  const dispatch = useDispatch();
  const {book} = route.params;
  const favoriteBooks = useSelector((state: RootState) => state.favorites.list);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      bounces={false}
      contentContainerStyle={styles.container}>
      <Image source={{uri: book.cover}} style={styles.coverImage} />
      <Text style={styles.title}>{book.title}</Text>
      <Text style={styles.releaseDate}>{book.releaseDate}</Text>
      <Text style={styles.description}>{book.description}</Text>
      <Text style={styles.pages}>Pages: {book.pages}</Text>
      <View style={styles.space} />
      {isFavorite({list: favoriteBooks}, book.index) && (
        <Text style={styles.favoriteLabel}>Favorite</Text>
      )}
      <TouchableOpacity
        style={styles.favoriteButton}
        onPress={() => dispatch(addFavorite(book))}>
        <Text style={styles.favoriteButtonText}>{strings.favorite_add}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  coverImage: {
    width: '100%',
    height: 300,
    borderRadius: 8,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  releaseDate: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
    textAlign: 'center',
  },
  space: {
    flex: 1,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
    marginBottom: 20,
  },
  pages: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 20,
  },
  favoriteLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e63946',
    textAlign: 'center',
    marginBottom: 20,
  },
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

export default BookDetailsScreen;
