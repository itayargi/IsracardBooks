import {combineReducers} from 'redux'; // Correct import for combineReducers
import booksReducer from './booksSlice'; // Import your books reducer
import favoritesReducer from './favoritesSlice';

const rootReducer = combineReducers({
  books: booksReducer,
  favorites: favoritesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
