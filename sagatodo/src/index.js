import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { configStore } from './store/store';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

const store = configStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
