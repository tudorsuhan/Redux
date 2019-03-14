import { createAction } from 'redux-actions';

const imageStatus = createAction('IMAGE_STATUS', loading => loading);
const imageSuccess = createAction('IMAGE_SUCCESS', images => images);
const imageError = createAction('IMAGE_ERROR', error => error);

export { imageStatus, imageSuccess, imageError };
