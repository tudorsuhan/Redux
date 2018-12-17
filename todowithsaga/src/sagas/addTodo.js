import * as actions from '../actions/actionTypesTodo';
import * as actionCreator from '../actions/actionCreators';
import { call, put, takeLatest } from 'redux-saga/effects';

function* addTd(action) {
  const todoItem = { text: action.text, id: action.id }
  try {
    yield put({ type: actionCreator.addTodo, todoItem });
  } catch (error) {
    yield put({ type: actions.ADD_TODO_FAILED, todoItem });
  }
}

// function* addTodo(action) {
//   const { text: t } = action;

//   try {
//     const todo = yield call(
//       api,
//       '/add-todo',
//       {
//         method: 'POST',
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ text: t })
//       }
//     );

//     const { _id: id, text } = todo;

//     yield put({ type: actions.ADD_TODO_SUCCEEDED, id, text });
//   } catch (error) {
//     yield put({ type: actions.ADD_TODO_FAILED, message: error.message });
//   }
// }

export default function* watchAddTodo() {
  yield* takeLatest(actions.ADD_TODO_REQUESTED, addTd);
}