import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Book} from '../utils/types';

interface FavoritesState {
  list: Book[];
}

const initialState: FavoritesState = {
  list: [],
};

// Utility function to check if a book is a favorite
export const isFavorite = (
  state: FavoritesState,
  bookIndex: number,
): boolean => {
  return state.list.some(book => book.index === bookIndex);
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Book>) => {
      if (!isFavorite(state, action.payload.index)) {
        state.list.push(action.payload);
      }
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter(book => book.index !== action.payload);
    },
  },
});

export const {addFavorite, removeFavorite} = favoritesSlice.actions;
export default favoritesSlice.reducer;
