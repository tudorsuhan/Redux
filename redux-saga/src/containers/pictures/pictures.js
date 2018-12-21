// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Instruments
import Photos from '../../components/Photos/Photos';
import styles from './pictures.module.scss';

class Pictures extends Component {
  render() {
    return (
      <div className={styles.apps}>
        <Photos />
      </div>
    );
  }
}

export default connect()(Pictures); 