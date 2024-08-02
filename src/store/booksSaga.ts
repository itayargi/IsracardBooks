import {call, CallEffect, put, PutEffect, takeEvery} from 'redux-saga/effects';
import axiosInstance from '../api/interceptors';
import urls from '../api/urls';
import {BookAction} from '../utils/enums';
import {Book} from '../utils/types';
import {setBooks, setLoading} from './booksSlice';

function* fetchBooks(): Generator<
  CallEffect | PutEffect,
  void,
  {data: Book[]}
> {
  try {
    yield put(setLoading(true));
    const response = yield call(axiosInstance.get, urls.getBooks);
    yield put(setBooks(response.data));
  } catch (error) {
    console.error('Failed to fetch books:', error);
  } finally {
    yield put(setLoading(false));
  }
}

export default function* booksSaga() {
  yield takeEvery(BookAction.FetchBooks, fetchBooks);
}
