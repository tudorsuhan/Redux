// Core
import { createSelector } from 'reselect';

export const getDataSelector = (state) => state.data.data;
export const getLoadingStateSelector = (state) => state.data.loading;
export const getErrorStateSelector = (state) => state.data.loading;

export const getDataSlct = createSelector(
  getDataSelector,
  (data) => {
    return data;
  }
);

export const getLoadingStateSlct = createSelector(
  getLoadingStateSelector,
  (loading) => {
    return loading;
  }
);

export const getErrorStateSlct = createSelector(
  getErrorStateSelector,
  (error) => {
    return error;
  }
);
