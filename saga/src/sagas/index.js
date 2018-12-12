import { all } from 'redux-saga/effects';
import { actionWatcherDogs } from './dogs';
import { actionWatcherNews } from './news';

export default function* rootSaga() {
  yield all([actionWatcherDogs(), actionWatcherNews()]);
}
