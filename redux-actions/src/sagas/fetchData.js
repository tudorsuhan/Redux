// Core
import { takeLatest, call, put } from 'redux-saga/effects';

// Instruments
import { fetch } from '../API/fetch';
import * as types from '../actions/actionCreators';

/**
 * Worker
 */
function* fetchDataWorker() {
  try {
    const response = yield call(fetch);
    const results = response.data;
    console.log(results);
    yield put(types.fetchSuccess, results);
  } catch (error) {
    yield put(types.fetchError, error.message);
  }
}

/**
 * Watcher
 */
export function* fetchDataWatcher() {
  yield takeLatest(types.fetchStatus, fetchDataWorker);
}