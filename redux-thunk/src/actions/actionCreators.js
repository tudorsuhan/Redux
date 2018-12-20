import { types } from './actionTypes';

export const requestPending = (error) => ({
  type: types.PENDING,
  payload: { error }
});

export const requestSuccess = (files) => ({
  type: types.SUCCESS,
  payload: { files }
});

export const requestError = (error) => ({
  type: types.ERROR,
  payload: { error }
});
