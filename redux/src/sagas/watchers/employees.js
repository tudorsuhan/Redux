import { takeEvery, all } from 'redux-saga/effects';

import * as actions from '../../actions/employees';
import { employeesDataWorker } from '../workers/employees';

export function* watchGetEmployeesInfo() {
  yield takeEvery(actions.employeesStatus, employeesDataWorker);
}

export function* employeesDataWatcher() {
  yield all([
    watchGetEmployeesInfo(),
  ]);
}
