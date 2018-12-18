import React, { Component } from 'react';
import { connect } from 'react-redux';
import todoAction from '../../actions/actionTodos';
import Todo from '../SingleTodo/SingleTodo.js';
import NoTodos from '../NoTodos/NoTodos.js';

// Antd
import { Button, Tooltip } from 'antd';
import 'antd/dist/antd.css';

// Styles
import styles from './Todos.module.scss';

const { deleteTodo, editTodo, completeTodo, allCompleted, deleteCompleted } = todoAction;

class Todos extends Component {
  state = {
    size: 'large',
  };

  render() {
    const { todos, deleteCompleted } = this.props;
    const size = this.state.size;
    if (todos.length === 0) {
      return <NoTodos text="No Todos" />;
    }

    return (
      <form className={styles.todos}>
        <div className={styles['todos-actions']}>
          <div style={{ flexGrow: '1', marginLeft: '5px' }}>{todos.length} tasks</div>
          <Tooltip title="Delete All">
            <Button type="danger" shape="circle" icon="delete" size={size} onClick={deleteCompleted} />
          </Tooltip>
        </div>
        <div className={styles['todos-list']}>
          {todos.map(todo => (
            <Todo {...this.props} key={todo.id} todo={todo} />
          ))}
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.Todos.todos,
  showAllenabled: state.showAllenabled,
});

export default connect(mapStateToProps, {
  deleteTodo,
  editTodo,
  completeTodo,
  allCompleted,
  deleteCompleted,
})(Todos);
