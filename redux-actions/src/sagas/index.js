// Core
import { all, spawn  } from 'redux-saga/effects';

// Instruments
import { fetchDataWatcher } from './watchers/fetchData';

export default function* rootSaga() {
  yield all([
    spawn(fetchDataWatcher),
  ]);
}
