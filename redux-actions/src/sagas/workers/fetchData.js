// Core
import { call, put } from 'redux-saga/effects';
import axios from 'axios';

// Instruments
import * as actions from '../../actions/actionCreators';

export const fetchApi = () => {
  return axios({
    url: 'https://windows.softwsp.com/wp-json/wp/v2/posts',
    method: 'GET',
  });
}

export function* fetchDataWorker() {
  try {
    const response = yield call(fetchApi);
    const results = response.data;
    
    console.log(results);
    yield put(actions.fetchSuccess(results));
  } catch (error) {
    yield put(actions.fetchError(error));
  }
}