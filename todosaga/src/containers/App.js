import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewTodo from '../components/NewTodo/NewTodo';
import Todos from '../components/Todos/Todos';

import styles from './App.module.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <NewTodo />
        <Todos />
      </div>
    );
  }
}

export default connect()(App);
