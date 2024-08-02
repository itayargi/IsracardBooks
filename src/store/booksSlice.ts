import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Book} from '../utils/types';

interface BooksState {
  list: Book[];
  searchQuery: string;
  favorites: Book[];
  loading: boolean;
}
//state to handle home screen books
const initialState: BooksState = {
  list: [],
  searchQuery: '',
  favorites: [],
  loading: false,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks: (state, action: PayloadAction<Book[]>) => {
      state.list = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    addFavorite: (state, action: PayloadAction<Book>) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter(
        book => book.index.toString() !== action.payload,
      );
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const {
  setBooks,
  setSearchQuery,
  addFavorite,
  removeFavorite,
  setLoading,
} = booksSlice.actions;

export default booksSlice.reducer;
