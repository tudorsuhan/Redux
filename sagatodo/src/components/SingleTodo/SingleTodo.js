import React, { Component } from 'react';
import { connect } from 'react-redux';
import { timeDifference } from '../../utils/timeDifference';
import EditField from './EditField/EditField';

// Antd
import { Checkbox } from 'antd';
import 'antd/dist/antd.css';

// Styles
import styles from './SingleTodo.module.scss';

class Todo extends Component {
  state = {
    editable: false,
    isCondition: false, 
    value: this.props.todo.todo
  };

  handleIsCondition = () => {
    this.setState({
      isCondition: !this.state.isCondition
    })
  }

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

  onComplete = (event) => {
    this.handleIsCondition();
    if (event.target.checked) {
      const { todo, completeTodo } = this.props;
      todo.completed = !todo.completed;
      completeTodo(todo);
    } 
    return console.log(`Checked`, event.target.checked);
  }

  render() {
    const { todo, deleteTodo } = this.props;
    const { editable, value, isCondition } = this.state;
    console.log(this.props);

    return (
      <div className={styles.todoItem} title={`Created ${timeDifference(todo.createTime)}`}>
        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
          <div className={styles['todoItem__checked']}>
            <Checkbox onClick={this.onComplete} />
          </div>
          <div className={isCondition ? [styles['todoItem__task'], styles['todoItem__task-done']].join(' ') : styles['todoItem__task']}>{todo.todo}</div>
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
          <div className={styles['todoItem-editable']}>
            <EditField
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

export default connect()(Todo);