import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { configStore } from './store/configStore';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = configStore();
console.log(store.getState());

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
