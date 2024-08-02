// store/booksSaga.ts
import {call, put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import {setBooks} from './booksSlice';

function* fetchBooks() {
  try {
    const response = yield call(
      axios.get,
      'https://potterapi-fedeperin.vercel.app/en/books',
    );
    yield put(setBooks(response.data));
  } catch (error) {
    console.error('Failed to fetch books:', error);
  }
}

export default function* booksSaga() {
  yield takeEvery('books/fetchBooks', fetchBooks);
}
