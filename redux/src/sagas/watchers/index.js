import { all, spawn } from 'redux-saga/effects';

import { imageDataWatcher } from './images';

export default function* rootSaga() {
  yield all([
    spawn(imageDataWatcher),
  ]);
}
