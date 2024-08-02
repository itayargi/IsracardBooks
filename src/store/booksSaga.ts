import {call, put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import {setBooks, setLoading} from './booksSlice';
import {BookAction} from '../utils/enums';
import {Book} from '../utils/types';
import {CallEffect, PutEffect} from 'redux-saga/effects';
import urls from '../api/urls';

function* fetchBooks(): Generator<
  CallEffect | PutEffect,
  void,
  {data: Book[]}
> {
  try {
    yield put(setLoading(true));
    const response = yield call(axios.get, urls.getBooks);
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
