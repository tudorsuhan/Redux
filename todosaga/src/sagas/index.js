import watcherAddTodo from './addTodo';
import { fork, all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([
    fork(watcherAddTodo),
  ])
}