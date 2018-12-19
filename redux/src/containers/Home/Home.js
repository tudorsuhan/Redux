// Core
import React from 'react';
import { Link } from 'react-router-dom';

// Instruments
import styles from './Home.module.scss';

const Home = () => (
  <div className={styles.nav}>
    <Link to="/redux-thunk">Redux Thunk</Link>
    <Link to="/redux-saga">Redux Saga</Link>
    <Link to="/redux-actions">Redux Actions</Link>
  </div>
);
export default Home;