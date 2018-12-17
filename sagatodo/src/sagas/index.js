import { all } from 'redux-saga/effects';
import todosSagas from './sagaTodos';

export default function* rootSaga(getState) {
  yield all([todosSagas()]);
}
