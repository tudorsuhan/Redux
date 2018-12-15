import * as actions from '../actions/actionTypesTodo';
import { put, takeEvery } from 'redux-saga/effects';

function* workerAddTodo(id, text) {
  console.log(id, text)
  try {
    yield put({ type: actions.ADD_TODO_SUCCEEDED, id, text });
  } catch (error) {
    yield put({ type: actions.ADD_TODO_FAILED, message: error.message });
  }
}

export default function* watcherAddTodo() {
  yield takeEvery(actions.ADD_TODO_REQUESTED, workerAddTodo);
}