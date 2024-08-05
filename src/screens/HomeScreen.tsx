// HomeScreen.tsx
import React, {useCallback, useEffect} from 'react';
import {StyleSheet, Text, TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AppBG from '../components/appBackground/AppBG';
import BooksList from '../components/lists/BookList';
import Loader from '../components/loader/Loader';
import {navigate} from '../navigation/navigationRef';
import {AppDispatch, RootState} from '../store';
import {setSearchQuery} from '../store/booksSlice';
import {selectBooksList, selectFilteredBooks} from '../store/selectors'; // Import selectors
import colors from '../utils/colors';
import {BookAction, ScreenName} from '../utils/enums';
import strings from '../utils/strings';
import {Book} from '../utils/types';

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  // full list of books
  const books = useSelector(selectBooksList);
  // filtered list of books
  const filteredBooks = useSelector(selectFilteredBooks);
  const searchQuery = useSelector(
    (state: RootState) => state.books.searchQuery,
  );
  const loading = useSelector((state: RootState) => state.books.loading);
  const serachParams = {
    placeholder: strings.searchPlaceholder,
    placeholderTextColor: colors.placeholder,
    value: searchQuery,
    onChangeText: (text: string) => dispatch(setSearchQuery(text)),
    style: styles.searchInput,
  };
  useEffect(() => {
    // Dispatch an action to fetch books
    dispatch({type: BookAction.FetchBooks});
  }, [dispatch]);

  const handlePressBook = useCallback((book: Book) => {
    navigate(ScreenName.BookDetailsScreen, {book});
  }, []);

  // RENDER CONTENT
  const renderContent = () => {
    if (loading) {
      return <Loader />;
    }
    if (filteredBooks.length === 0) {
      return <Text style={styles.noBooksText}>{strings.searchNoResults}</Text>;
    }
    return (
      <BooksList
        books={books}
        filteredBooks={filteredBooks}
        onPressBook={handlePressBook}
        searchQuery={searchQuery}
      />
    );
  };

  return (
    <AppBG style={styles.container}>
      <TextInput {...serachParams} />
      {renderContent()}
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
  noBooksText: {
    textAlign: 'center',
    marginTop: 20,
  },
});

export default HomeScreen;
