// store/booksSlice.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface Book {
  index: number;
  title: string;
  releaseDate: string;
  cover: string;
  description?: string;
  pages?: number;
  originalTitle: string;
}

interface BooksState {
  list: Book[];
  searchQuery: string;
  favorites: Book[];
}

const initialState: BooksState = {
  list: [],
  searchQuery: '',
  favorites: [],
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
        book => book.id !== action.payload,
      );
    },
  },
});

export const {setBooks, setSearchQuery, addFavorite, removeFavorite} =
  booksSlice.actions;

export default booksSlice.reducer;
