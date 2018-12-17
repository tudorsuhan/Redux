import React, { Component } from 'react';
import styles from './InputText.module.scss';

export default class extends Component {
  componentDidMount() {
    document.getElementById(this.props.id).focus();
  }

  handleOnChange = (event) => {
    this.props.onChange(event.target.value);
  }

  handleOnKeyPress = (event) => {
    const { value } = this.props;
    if (event.key === 'Enter') {
      event.preventDefault();
      if (value !== '') {
        this.props.onEnter(value);
      }
    }
  }

  render() {
    const { value, id } = this.props;

    return (
      <input
        id={id}
        className={styles.inputTodo}
        placeholder="New Todo"
        type="text"
        required=""
        onChange={this.handleOnChange}
        onKeyPress={this.handleOnKeyPress}
        value={value}
        autoComplete="off"
      />
    );
  }
}
