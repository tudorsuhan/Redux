// Core
import axios from 'axios';

export const fetchApi = (url) => {
  return axios({
    url: url,
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