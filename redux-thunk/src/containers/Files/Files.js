// Core
import React, { Component } from 'react';

// Instruments
import FetchFiles from '../../components/FetchFiles/FetchFiles';
import FetchMD5 from '../../components/FetchFiles/FetchMD5';
import styles from './Files.module.scss';

export default class Files extends Component {
  render() {
    return (
      <div className={styles.files}>
        <FetchFiles />
        <FetchMD5 />
      </div>
    );
  }
}
