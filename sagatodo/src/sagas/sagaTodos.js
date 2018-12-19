import { all, takeEvery, put } from 'redux-saga/effects';
import actions from '../actions/actionTodos';

export function* changedTodo() {
  yield takeEvery(actions.CHANGE_TODO, function* () { });
}

export function* addTodo({ payload }) {
  const { newTodoText } = payload;
  const todo = {
    id: new Date().getTime(),
    todo: newTodoText,
    createTime: new Date().getTime(),
    completed: false
  };
  yield put(actions.addTodoReturn(todo));
}

export function* deleteTodo({ payload }) {
  const { todo } = payload;
  yield put(actions.deleteTodoReturn(todo));
}

export function* editTodo({ payload }) {
  const { todo } = payload;
  yield put(actions.editTodoReturn(todo));
}

export function* completeTodo({ payload }) {
  const { todo } = payload;
  yield put(actions.editTodoReturn(todo));
}

export function* deleteCompleted() {
  yield put(actions.deleteCompletedReturn());
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.ADD_TODO, addTodo),
    takeEvery(actions.DELETE_TODO, deleteTodo),
    takeEvery(actions.EDIT_TODO, editTodo),
    takeEvery(actions.COMPLETE_TODO, completeTodo),
    takeEvery(actions.DELETE_COMPLETED, deleteCompleted),
  ]);
}
