import { takeEvery, all } from 'redux-saga/effects';

import * as actions from '../../actions/images';
import { imageDataWorker } from '../workers/images';

export function* watchGetImages() {
  yield takeEvery(actions.imageStatus, imageDataWorker);
}

export function* imageDataWatcher() {
  yield all([
    watchGetImages(),
  ]);
}
