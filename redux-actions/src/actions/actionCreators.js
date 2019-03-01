import { createAction } from 'redux-actions';
import { types } from './actionTypes';

export const fetchStatus = createAction(types.FETCH_STATUS, (loading) => loading);
export const fetchSuccess = createAction(types.FETCH_SUCCESS, (data) => ({ data }));
export const fetchError = createAction(types.FETCH_ERROR, (error) => error);

export const imageStatus = createAction(types.IMAGE_STATUS, (loading) => loading);
export const imageSuccess = createAction(types.IMAGE_SUCCESS, (images) => images);
export const imageError = createAction(types.IMAGE_ERROR, (error) => error);
