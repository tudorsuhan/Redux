import React, { Component } from 'react';
import InputText from '../UserInput/inputText';
import { timeDifference } from '../../utils/timeDifference';

// Antd
import { Checkbox } from 'antd';
import 'antd/dist/antd.css';

// Styles
import styles from './SingleTodo.module.scss';

export default class Todo extends Component {
  state = {
    editable: false,
    value: this.props.todo.todo
  };

  onEditableClicked = () => {
    const { editable } = this.state;
    this.setState({ editable: !editable });
  }

  onChange = value => {
    this.setState({ value });
  }

  onEnter = () => {
    const { todo, editTodo } = this.props;
    const { value } = this.state;
    todo.todo = value;
    editTodo(todo);
    this.setState({ editable: false });
  }

  onComplete = () => {
    const { todo, completeTodo } = this.props;
    todo.completed = !todo.completed;
    completeTodo(todo);
  }

  render() {
    const { todo, deleteTodo } = this.props;
    const { editable, value } = this.state;

    return (
      <div className={styles.todoItem} title={timeDifference(todo.createTime)}>
        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
          <div className={styles['todoItem__checked']}>
            <Checkbox onClick={this.onComplete} on={todo.completed} />
          </div>
          <div className={styles['todoItem__task']}>{todo.todo}</div>
        </div>
        <div className={styles['todoItem-actions']}>
          <div className={styles['todoItem-actions__edit']}>
            <button type="button" className={[styles.button, styles['button--edit']].join(' ')} onClick={this.onEditableClicked}>
              {editable ? 'Cancel' : 'Edit'}
            </button>
          </div>
          <div className={styles['todoItem-actions__delete']}>
            <button type="button" className={[styles.button, styles['button--delete']].join(' ')} onClick={() => { deleteTodo(todo); }}>
              Delete
            </button>
          </div>
        </div>
        {editable ? (
          <div className={styles['todoItem__editable']}>
            <InputText
              onChange={this.onChange}
              onEnter={this.onEnter}
              id={todo.id}
              value={value}
            />
          </div>
        ) : ( '' )}
      </div>
    );
  }
}
