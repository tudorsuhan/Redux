import watchAddTodo from './addTodo';
import { fork, all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([
    fork(watchAddTodo),
  ])
}