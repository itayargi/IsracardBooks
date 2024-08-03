import React, {useEffect} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AppBG from '../components/appBackground/AppBG';
import BooksList from '../components/lists/BookList';
import Loader from '../components/loader/Loader';
import {navigate} from '../navigation/navigationRef';
import {AppDispatch, RootState} from '../store';
import {setSearchQuery} from '../store/booksSlice';
import colors from '../utils/colors';
import {BookAction, ScreenName} from '../utils/enums';
import strings from '../utils/strings';
import {Book} from '../utils/types';
const HomeScreen: React.FC = () => {
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
    <AppBG style={styles.container}>
      <TextInput
        placeholder={strings.searchPlaceholder}
        placeholderTextColor={colors.placeholder}
        value={searchQuery}
        onChangeText={text => dispatch(setSearchQuery(text))}
        style={styles.searchInput}
      />
      {loading ? (
        <Loader />
      ) : (
        <BooksList
          books={books}
          filteredBooks={filteredBooks}
          onPressBook={handlePressBook}
          searchQuery={searchQuery}
        />
      )}
    </AppBG>
  );
};

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
});

export default HomeScreen;
