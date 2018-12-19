import { actionTypes } from './thunkActionTypes';

export const pendingRequest = (loading) => ({
  type: actionTypes.PENDING,
  payload: { loading },
});

export const successRequest = (data) => ({
  type: actionTypes.SUCCESS,
  payload: { data },
});

export const errorRequest = (error) => ({
  type: actionTypes.ERROR,
  payload: { error },
});
