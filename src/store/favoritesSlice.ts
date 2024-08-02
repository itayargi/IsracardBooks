import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Book} from './booksSlice';

interface FavoritesState {
  list: Book[];
}

const initialState: FavoritesState = {
  list: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Book>) => {
      state.list.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter(
        book => book.index.toString() !== action.payload,
      );
    },
  },
});

export const {addFavorite, removeFavorite} = favoritesSlice.actions;
export default favoritesSlice.reducer;
