import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

/**
 * Watcher Saga: watches for actions dispatched to the store, starts worker saga
 */
export function* watcherSaga() {
  yield takeLatest('API_CALL_REQUEST', workerSaga);
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
