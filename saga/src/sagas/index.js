import { takeLatest, call, put, all } from 'redux-saga/effects';
import axios from 'axios';

/**
 * Watcher Saga: watches for actions dispatched to the store, starts worker saga
 */
export function* actionWatcherDogs() {
  yield takeLatest('API_CALL_REQUEST', workerSaga);
}

export function* actionWatcherNews() {
  yield takeLatest('NEWS_REQUEST', workerSagaNews);
}

/**
 * Function that makes the api request and returns a Promise for response
 */
export const fetchDog = () => {
  return axios({
    method: 'GET',
    url: 'https://dog.ceo/api/breeds/image/random'
  });
};

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
export function* workerSaga() {
  try {
    const response = yield call(fetchDog);
    const dog = response.data.message;

    /**
     * Dispatch a success action to the store with the new dog
     */
    yield put({ type: 'API_CALL_SUCCESS', dog });
  } catch (error) {
    /**
     * Dispatch a failure action to the store with the error
     */
    yield put({ type: 'API_CALL_FAILURE', error });
  }
}

export function* workerSagaNews() {
  try {
    const response = yield call(fetchNews);
    const news = response.data.articles;
    yield put({ type: 'NEWS_SUCCESS', news });
  } catch (error) {
    yield put({ type: 'NEWS_SUCCESS', error });
  }
}

export default function* rootSaga() {
  yield all([actionWatcherDogs(), actionWatcherNews()]);
}
