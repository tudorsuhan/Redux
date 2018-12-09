import React, { Component } from 'react';
import './App.scss';
import configureStore from './store/store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import FetchWithThunk from './containers/ThunkContainer';
import { object, bool, any } from 'prop-types';

const store = configureStore();
console.log(store.getState());

export default class App extends Component {
  static propTypes = {
    store: object,
    loading: bool,
    error: any,
  }
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <FetchWithThunk />
        </BrowserRouter>
      </Provider>
    );
  }
}