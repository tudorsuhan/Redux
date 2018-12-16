import * as actions from '../actions/actionTypesTodo';
import { put, takeEvery } from 'redux-saga/effects';

function* workerAddTodo(action) {
  const { id, text, completed } = action;
  try {
    yield put({ type: actions.ADD_TODO_SUCCESS, id, text, completed });
  } catch (error) {
    yield put({ type: actions.ADD_TODO_FAILURE, error: action.error, });
  }
}

export default function* watcherAddTodo() {
  yield takeEvery(actions.ADD_TODO_STATUS, workerAddTodo);
}