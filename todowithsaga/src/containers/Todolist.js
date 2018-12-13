import React, { Component } from 'react';
import Input from '../components/Input/Input';
import Todo from '../components/Todo/Todo';
import styles from './Todolist.module.scss';

export default class TodoList extends Component {
  render() {
    return (
      <div className={styles.todolist}>
        <Input />
        <Todo />
      </div>
    );
  }
}
