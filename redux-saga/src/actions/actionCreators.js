export const apiCallRequest = () => ({ type: 'API_CALL_REQUEST' });
export const apiCallSuccess = () => ({ type: 'API_CALL_SUCCESS' });
export const apiCallFailure = () => ({ type: 'API_CALL_FAILURE' });

export const newsRequest = () => ({ type: 'NEWS_REQUEST' });
export const newsSuccess = () => ({ type: 'NEWS_SUCCESS' });
export const newsError = () => ({ type: 'NEWS_ERROR' });

export const photoRequest = (loading) => ({ type: 'PHOTOS_REQUEST', loading });
export const photoSuccess = (photos) => ({ type: 'PHOTOS_SUCCESS', payload: { photos } });
export const photoError = (error) => ({ type: 'PHOTOS_ERROR', error });