// Core
import React, { Component } from 'react';
import { Provider } from 'react-redux';

// Instruments
import { configStore } from './store/store';
import Files from './containers/Files/Files';
import styles from './App.module.scss';

// Redux store
const store = configStore();
console.log(store.getState());

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className={styles.App}>
          <Files />
        </div>
      </Provider>
    );
  }
}
