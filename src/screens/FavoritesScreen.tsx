import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, FlatList, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {removeFavorite} from '../store/favoritesSlice';
import {RootState, AppDispatch} from '../store';
import {ICustomNavigationFunctionComponent} from '../utils/types';
import {navigate} from '../navigation/navigationRef';
import {ScreenName} from '../utils/enums';
import BookCard from '../components/book/BookCard';
import strings from '../utils/strings';

const FavoritesScreen: ICustomNavigationFunctionComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const favoriteBooks = useSelector((state: RootState) => state.favorites.list);

  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteBooks}
        keyExtractor={item => item.index.toString()}
        renderItem={({item}) => (
          <View style={styles.cardContainer}>
            <BookCard
              title={item.title}
              releaseDate={item.releaseDate}
              cover={item.cover}
              onPress={() =>
                navigate(ScreenName.BookDetailsScreen, {book: item})
              }
            />
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => dispatch(removeFavorite(item.index))}>
              <Text style={styles.removeButtonText}>
                {strings.favorite_remove}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 10,
  },
  cardContainer: {
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  removeButton: {
    backgroundColor: '#e63946',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FavoritesScreen;
