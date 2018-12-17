import React, { Component } from 'react';
import styles from './Todo.module.scss';
import { connect } from 'react-redux';

class Todo extends Component {  
  render() {
    const { value, onChange } = this.props;
    return (
      <div className={styles.todo} onChange={onChange}>
        {/* { this.props.dispatch(value)  } */}
      </div>
    );
  }
}

export default connect()(Todo);