// Core
import React, { Component } from 'react';
import NewsItems from '../../components/NewsItem/NewsItem';
import ButtonRequest from '../../components/ButtonRequest/ButtonRequest';

// Instruments
import styles from './news.module.scss';

export default class News extends Component {
  render() {
    return (
      <div className={styles.news}>
        <ButtonRequest />
        <NewsItems />
      </div>
    );
  }
}
