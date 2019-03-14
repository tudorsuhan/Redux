import { call, put } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../../actions/images';

const api = () => (
  axios({
    url: 'https://jsonplaceholder.typicode.com/photos/',
    method: 'GET',
  })
);

function* imageDataWorker() {
  try {
    const response = yield call(api);
    const results = response.data;

    yield put(actions.imageSuccess(results));
  } catch (error) {
    yield put(actions.imageError(error));
  }
}

export { api, imageDataWorker };
