import { createAction } from 'redux-actions';
import { types } from './actionTypes';

export const fetchStatus = createAction(types.FETCH_STATUS, loading => loading);
export const fetchSuccess = createAction(types.FETCH_SUCCESS, data => data);
export const fetchError = createAction(types.FETCH_ERROR, error => error);

// export const { fetchStatus, fetchSuccess, fetchError } = createActions(
//   types.FETCH_STATUS, loading => loading,
//   types.FETCH_SUCCESS, data => data,
//   types.FETCH_ERROR, error => error,
// );
