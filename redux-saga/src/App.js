// Core
import React, { Component } from 'react';
import { Provider } from 'react-redux';

// Instruments
import { configStore } from './store/store';
import styles from './App.module.scss';
import Pictures from './containers/pictures/pictures';
import Dogs from './containers/dogs/dogs';
import News from './containers/news/news';

const store = configStore();
console.log(store.getState());

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className={styles.app}>
          <Dogs />
          <News />
          <Pictures />
        </div>
      </Provider>
    );
  }
}
