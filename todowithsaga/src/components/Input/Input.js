import React, { Component } from 'react';
import styles from './Input.module.scss';
import { connect } from 'react-redux';
import { array, string } from 'prop-types';
import Todo from '../Todo/Todo';
import { addTodo } from '../../actions/actionCreators';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      todos: [],
    };
  }

  static propTypes = {
    todos: array,
    text: string,
  }
  static defaultProps = {
    todos: [''],
    text: 'Add'
  }

  handleUserInput = (event) => {
    this.setState({
      text: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(!this.state.text.length) { return; }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    }
    // this.props.dispatch(addTodo(this.state.todos))
    this.setState(state => ({
      todos: state.todos.concat(newItem),
      text: ''
    }))
  }
  
  render() {
    const { text, todos } = this.state;
    console.log(this.props);
    console.log(todos);

    return (
      <div className={styles.todoList}>
        <form name="todo" className={styles.todoForm} onSubmit={this.handleSubmit}>
          <div className={styles.todoInput}>
            <input 
              type="text" 
              className={styles.inputField} 
              value={text} 
              onChange={this.handleUserInput} 
              placeholder="Add a todo..." 
            />
          </div>
        </form>
        <ul className={styles.todoUl}>
          <Todo todos={todos} />
        </ul>
      </div>
    );
  }
}

export default connect()(Input);