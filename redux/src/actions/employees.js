import { createAction } from 'redux-actions';

const employeesStatus = createAction('EMPLOYEES_STATUS', loading => loading);
const employeesSuccess = createAction('EMPLOYEES_SUCCESS', employees => employees);
const employeesError = createAction('EMPLOYEES_ERROR', error => error);

export { employeesStatus, employeesSuccess, employeesError };
