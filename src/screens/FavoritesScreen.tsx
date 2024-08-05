import React, {useCallback} from 'react';
import {FlatList, StyleSheet, View, ListRenderItem} from 'react-native';
import {useSelector} from 'react-redux';
import BookCard from '../components/book/BookCard';
import RemoveBookBtn from '../components/book/RemoveBookBtn';
import {navigate} from '../navigation/navigationRef';
import {RootState} from '../store';
import {ScreenName} from '../utils/enums';
import {ICustomNavigationFunctionComponent, Book} from '../utils/types';
import AppBG from '../components/appBackground/AppBG';

const FavoritesScreen: ICustomNavigationFunctionComponent = () => {
  const favoriteBooks = useSelector((state: RootState) => state.favorites.list);

  const keyExtractor = useCallback((item: Book) => item.index.toString(), []);

  const renderItem: ListRenderItem<Book> = useCallback(
    ({item}) => (
      <View style={styles.cardContainer}>
        <BookCard
          title={item.title}
          releaseDate={item.releaseDate}
          cover={item.cover}
          onPress={() => navigate(ScreenName.BookDetailsScreen, {book: item})}
        />
        <RemoveBookBtn index={item.index} />
      </View>
    ),
    [],
  );

  return (
    <AppBG style={styles.container}>
      <FlatList
        data={favoriteBooks}
        bounces={false}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </AppBG>
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
});

export default FavoritesScreen;
