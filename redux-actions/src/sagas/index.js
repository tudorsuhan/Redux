// Core
import { all, spawn  } from 'redux-saga/effects';

// Instruments
import { fetchDataWatcher } from './watchers/fetchData';
import { imageDataWatcher } from './watchers/imageData';

export default function* rootSaga() {
  yield all([
    spawn(fetchDataWatcher),
    spawn(imageDataWatcher)
  ]);
}
