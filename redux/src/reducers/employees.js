import { handleActions } from 'redux-actions';

import * as actions from '../actions/employees';

const initialState = {
  loading: false,
  employees: [],
  error: false,
};

const handleEmployeesStatus = state => ({
  ...state,
  loading: true,
});

const handleEmployeesSuccess = (state, action) => ({
  ...state,
  loading: false,
  employees: action.payload,
});

const handleEmployeesError = state => ({
  ...state,
  loading: false,
  error: true,
});

const employeesData = handleActions(
  {
    [actions.employeesStatus]: handleEmployeesStatus,
    [actions.employeesSuccess]: handleEmployeesSuccess,
    [actions.employeesError]: handleEmployeesError,
  },
  initialState,
);

export default employeesData;
