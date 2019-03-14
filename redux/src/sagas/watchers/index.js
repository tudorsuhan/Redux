import { all, spawn } from 'redux-saga/effects';

import { imageDataWatcher } from './images';
import { employeesDataWatcher } from './employees';

export default function* rootSaga() {
  yield all([
    spawn(imageDataWatcher),
    spawn(employeesDataWatcher),
  ]);
}
