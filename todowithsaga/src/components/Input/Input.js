import React, { Component } from 'react';
import styles from './Input.module.scss';

export default class Input extends Component {
  render() {
    return (
      <div className={styles.input}>
        <input type="text" className={styles.inputField} placeholder="Add a todo..." />
      </div>
    );
  }
}
