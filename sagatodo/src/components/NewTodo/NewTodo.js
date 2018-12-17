import React from 'react';
import { connect } from 'react-redux';
import InputText from '../UserInput/inputText';
import todoAction from '../../actions/actionTodos';
import styles from './NewTodo.module.scss';

const { editNewTodo, addTodo } = todoAction;

const NewTodo = ({ newTodoText, editNewTodo, addTodo }) => (
  <form className={styles.formNewTodo} name="userInput">
    <InputText
      id="newTodoText" 
      value={newTodoText}
      onChange={editNewTodo}
      onEnter={addTodo}
    />
  </form>
);

function mapStateToProps(state) {
  const { newTodoText } = state.Todos;
  return {
    newTodoText
  };
}
export default connect(mapStateToProps, {
  editNewTodo,
  addTodo
})(NewTodo);
