// Core
import { takeEvery, all } from 'redux-saga/effects';

// Instruments
import * as actions from '../../actions/actionCreators';
import { fetchDataWorker } from '../workers/fetchData';

function* watchGetData() {
  yield takeEvery(actions.fetchStatus, fetchDataWorker);
}

export function* fetchDataWatcher() {
  yield all([
    watchGetData()
  ]);
}
