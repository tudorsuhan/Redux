// Core
import { all } from 'redux-saga/effects';

// Instruments
import { fetchDataWatcher } from './fetchData';

export default function* rootSaga() {
  yield all([
    fetchDataWatcher(),
  ]);
}
