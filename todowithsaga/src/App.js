import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { configStore } from './store/store';
import TodoList from './containers/Todolist';

// Styles
import styles from './App.module.scss';

const store = configStore();
console.log(store.getState());

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className={styles.app}>
          <TodoList />
        </div>
      </Provider>
    );
  }
}
