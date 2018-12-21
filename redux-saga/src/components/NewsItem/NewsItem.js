// Core
import React from 'react';
import { connect } from 'react-redux';

// Instruments
import styles from './NewsItem.module.scss';

const NewsItem = ({ article }) =>
  article
    ? article.map(post => (
        <h1 className={styles.articleTitle} key={post.title}>{post.title}</h1>
      ))
    : null;

const mapStateToProps = state => ({
  article: state.news.news
});

export default connect(mapStateToProps, null)(NewsItem);
