import React, {useEffect} from 'react';
import {
  FlatList,
  TextInput,
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../store';
import {setSearchQuery} from '../store/booksSlice';
import {BookAction, ScreenName} from '../utils/enums';
import {Book, ICustomNavigationFunctionComponent} from '../utils/types';
import {navigate} from '../navigation/navigationRef';
import BookCard from '../components/book/BookCard';
import Banner from '../components/banner/Banner';
import colors from '../utils/colors';
import strings from '../utils/strings';

const HomeScreen: ICustomNavigationFunctionComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const books = useSelector((state: RootState) => state.books.list);
  const searchQuery = useSelector(
    (state: RootState) => state.books.searchQuery,
  );
  const loading = useSelector((state: RootState) => state.books.loading);

  useEffect(() => {
    dispatch({type: BookAction.FetchBooks});
  }, [dispatch]);

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handlePressBook = (book: Book) => {
    navigate(ScreenName.BookDetailsScreen, {book});
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={strings.searchPlaceholder}
        value={searchQuery}
        onChangeText={text => dispatch(setSearchQuery(text))}
        style={styles.searchInput}
      />
      {loading ? (
        <ActivityIndicator size="large" color="#007bff" style={styles.loader} />
      ) : (
        <FlatList
          data={filteredBooks}
          keyExtractor={item => item.index.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <BookCard
              title={item.title}
              releaseDate={item.releaseDate}
              cover={item.cover}
              onPress={() => handlePressBook(item)}
            />
          )}
          ListHeaderComponent={
            <Banner books={books} onPressBook={handlePressBook} />
          }
          ListEmptyComponent={searchQuery ? <EmptyComponent /> : null}
          contentContainerStyle={styles.listContent}
        />
      )}
    </View>
  );
};

const EmptyComponent = () => (
  <View style={styles.emptyContainer}>
    <Text style={styles.emptyText}>{strings.searchNoResults}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.homeBackground,
    padding: 10,
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  listContent: {
    paddingBottom: 10,
  },
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  emptyText: {
    fontSize: 16,
    color: '#555',
  },
  loader: {
    marginTop: 20,
  },
});

export default HomeScreen;
