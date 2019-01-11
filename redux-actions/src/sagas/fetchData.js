// Core
import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

// Instruments
// import { fetchApi } from '../API/fetch';
import * as act from '../actions/actionCreators';

export const fetchApi = () => {
  return axios({
    url: 'https://windows.softwsp.com/wp-json/wp/v2/posts',
    method: 'GET',
  });
}

/**
 * Worker
 */
export function* fetchDataWorker() {
  try {
    const response = yield call(fetchApi);
    const results = response.data;
    
    console.log(results);
    yield put(act.fetchSuccess());
  } catch (error) {
    yield put(act.fetchError(), error.message);
  }
}

/**
 * Watcher
 */
export function* fetchDataWatcher() {
  yield takeLatest(act.fetchStatus, fetchDataWorker);
}