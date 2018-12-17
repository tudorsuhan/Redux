import React, { Component } from 'react';
import styles from './Input.module.scss';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/actionCreators';
import { string } from 'prop-types';
import Todo from '../Todo/Todo';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  static propTypes = {
    text: string,
    inputValue: string,
  }

  static defaultProps = {
    inputValue: 'Add a task...',
    text: 'Please add a task...',
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.inputValue !== "" && this.state.inputValue.length > 0) {
      this.props.addTodoItem(this.state.inputValue);
    }
   this.setState({ inputValue: '' })
  }
  
  handleInputValue = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  }

  render() {
    const { inputValue } = this.state;
    console.log(inputValue);
    console.log(this.props);
    return (
      <form name="inputtodo" className={styles.input} onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          className={styles.inputField} 
          value={inputValue} 
          onChange={this.handleInputValue} 
          placeholder="Add a todo..." 
        />
        <Todo value={inputValue} onSubmit={this.handleSubmit} />
      </form>
    );
  }
}

// const mapStateToProps = (state) => ({
//   id: state.todo.id,
//   text: state.todo.text,
//   completed: state.todo.completed,
// });

const mapDispatchToProps = (dispatch) => ({
  addTodoItem: (text) => dispatch(addTodo(text))
})

export default connect(null, mapDispatchToProps)(Input);