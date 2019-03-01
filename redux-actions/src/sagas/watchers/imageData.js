// Core
import { takeEvery, all } from 'redux-saga/effects';

// Instruments
import * as actions from '../../actions/actionCreators';
import { imageDataWorker } from '../workers/imageData';

export function* watchGetImages() {
  yield takeEvery(actions.imageStatus, imageDataWorker);
};

export function* imageDataWatcher() {
  yield all([
    watchGetImages()
  ]);
}
