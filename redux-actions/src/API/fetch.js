// Core
import axios from 'axios';

export const fetch = () => {
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