import React from 'react';
import styles from './NoTodos.module.scss';

export default ({ text }) => <div className={styles.noTodos}><h1>{text}</h1></div>;
