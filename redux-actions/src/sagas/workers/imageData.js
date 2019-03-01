// Core
import { call, put } from 'redux-saga/effects';
import axios from 'axios';

// Instruments
import * as actions from '../../actions/actionCreators';

export const fetchApi = () => {
  return axios({
    url: 'https://jsonplaceholder.typicode.com/photos/',
    method: 'GET',
  });
}

export function* imageDataWorker() {
  try {
    const response = yield call(fetchApi);
    const results = response.data;

    yield put(actions.imageSuccess(results));
  } catch (error) {
    yield put(actions.imageError(error));
  }
}