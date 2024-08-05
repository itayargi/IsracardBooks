import {createSelector} from 'reselect';
import {RootState} from '../store';

// Selector to get all books
export const selectBooksList = (state: RootState) => state.books.list;

// Selector to get the search query
export const selectSearchQuery = (state: RootState) => state.books.searchQuery;

// Memoized selector to filter books based on the search query
export const selectFilteredBooks = createSelector(
  [selectBooksList, selectSearchQuery],
  (books, searchQuery) => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    return books.filter(book =>
      book.title.toLowerCase().includes(lowerCaseQuery),
    );
  },
);
