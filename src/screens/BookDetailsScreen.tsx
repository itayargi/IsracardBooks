import React, {useMemo} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import {isFavorite} from '../store/favoritesSlice';
import {ICustomNavigationFunctionComponent} from '../utils/types';
import AppBG from '../components/appBackground/AppBG';
import FavoriteToggle from '../components/favorite/FavoriteToggle';

const BookDetailsScreen: ICustomNavigationFunctionComponent = ({route}) => {
  const {book} = route.params;
  const favoriteBooks = useSelector((state: RootState) => state.favorites.list);
  const favorite = useMemo(
    () => isFavorite({list: favoriteBooks}, book.index),
    [favoriteBooks, book.index],
  );

  return (
    <AppBG>
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
        <FavoriteToggle
          isFavorite={favorite}
          bookIndex={book.index}
          book={book}
        />
      </ScrollView>
    </AppBG>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
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
});

export default BookDetailsScreen;
