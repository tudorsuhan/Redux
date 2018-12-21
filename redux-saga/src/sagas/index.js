// Core
import { all } from 'redux-saga/effects';

// Instruments
import { photoWatcher } from './photos';
import { actionWatcherDogs } from './dogs';
import { actionWatcherNews } from './news';

export default function* rootSaga() {
  yield all([
    actionWatcherDogs(), 
    actionWatcherNews(),
    photoWatcher(),
  ]);
}
