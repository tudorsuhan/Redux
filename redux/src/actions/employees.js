import { createAction } from 'redux-actions';

const employeesStatus = createAction('employees_STATUS', loading => loading);
const employeesSuccess = createAction('employees_SUCCESS', employees => employees);
const employeesError = createAction('employees_ERROR', error => error);

export { employeesStatus, employeesSuccess, employeesError };
