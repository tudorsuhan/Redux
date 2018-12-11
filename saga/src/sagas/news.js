import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

/**
 * Watcher Saga: watches for actions dispatched to the store, starts worker saga
 */
export function* actionWatcherNews() {
  yield takeLatest('NEWS_REQUEST', workerSagaNews);
}

/**
 * Function that makes the api request and returns a Promise for response
 */
export const fetchNews = () => {
  return axios({
    method: 'GET',
    url:
      'https://newsapi.org/v2/everything?q=bitcoin&apiKey=7b7c980f914947a9a05aff086f46a9c2'
  });
};

/**
 * Worker Saga: makes the api call when watcher saga sees the action
 */
export function* workerSagaNews() {
  try {
    const response = yield call(fetchNews);
    const news = response.data.articles;
    yield put({ type: 'NEWS_SUCCESS', news });
  } catch (error) {
    yield put({ type: 'NEWS_SUCCESS', error });
  }
}
