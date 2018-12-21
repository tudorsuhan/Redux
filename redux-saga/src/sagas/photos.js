// Core
import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

// Fetch
export const fetchPhotos = () => {
  return axios({
    url: 'https://picsum.photos/list',
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    mode: 'no-cors',
    cache: "no-store",
    withCredentials: false,
    credentials: 'same-origin',
		crossdomain: true,
  });
}

// Worker
export function* photoWorker() {
  try {
    const response = yield call(fetchPhotos);
    const photos = response.data;
    // console.log(photos);
    yield put({ type: 'PHOTOS_SUCCESS', payload: { photos }, });
  } catch (error) {
    yield put({ type: 'PHOTOS_ERROR', payload: { error }, })
  }
}

// Watcher
export function* photoWatcher() {
  yield takeLatest('PHOTOS_REQUEST', photoWorker);
}