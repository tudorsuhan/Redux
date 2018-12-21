export const dogsFetchReducer = (state = {}, action) => {
  switch (action.type) {
    case 'API_CALL_REQUEST':
      return { ...state, fetching: true, error: null };
    case 'API_CALL_SUCCESS':
      return { ...state, fetching: false, dog: action.dog };
    case 'API_CALL_FAILURE':
      return { ...state, fetching: false, dog: null, error: action.error };
    default:
      return state;
  }
};

export const newsFetchReducer = (state = {}, action) => {
  switch (action.type) {
    case 'NEWS_REQUEST':
      return { ...state, loading: true };
    case 'NEWS_SUCCESS':
      return { ...state, news: action.news, loading: false };
    case 'NEWS_ERROR':
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

const initialState = {
  photos: [],
  loading: false,
  error: false,
}

export const photosFetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PHOTOS_REQUEST':
      return { ...state, loading: true, };
    case 'PHOTOS_SUCCESS':
      return { ...state, loading: false, photos: action.payload.photos, error: false, };
    case 'PHOTOS_ERROR':
      return { ...state, photos: [], loading: false, error: true, };
    default:
      return state;
  }
};
