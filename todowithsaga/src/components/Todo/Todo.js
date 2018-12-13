import React, { Component } from 'react';
import styles from './Todo.module.scss';

export default class Todo extends Component {
  render() {
    return (
      <div className={styles.todo}>
        Todo Item
      </div>
    );
  }
}
