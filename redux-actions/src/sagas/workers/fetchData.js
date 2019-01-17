// Core
import { call, put } from 'redux-saga/effects';
import axios from 'axios';

// Instruments
import * as actions from '../../actions/actionCreators';

export const fetchApi = () => {
  return axios({
    url: 'https://windows.softwsp.com/wp-json/wp/v2/posts?per_page=100',
    method: 'GET',
  });
}

export function* fetchDataWorker() {
  try {
    const response = yield call(fetchApi);
    const results = response.data;

    yield put(actions.fetchSuccess(results));
  } catch (error) {
    yield put(actions.fetchError(error));
  }
}