import React from 'react';
import { connect } from 'react-redux';
import styles from './NewsItem.module.scss';

const NewsItem = ({ article }) =>
  article
    ? article.map(post => (
        <article key={post.title} className={styles.article}>
          <img src={post.urlToImage} className={styles.articleImage} alt="" />
          <div className={styles.articleWrapper}>
            <h1 className={styles.articleTitle}>{post.title}</h1>
            <h4 className={styles.articleDescription}>{post.description}</h4>
            <div className={styles.articleLink}>
              <a href={post.url} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </div>
          </div>
        </article>
      ))
    : null;

const mapStateToProps = state => ({
  article: state.newsFetchReducer.news
});

const SagaNewsItems = connect(
  mapStateToProps,
  null
)(NewsItem);
export default SagaNewsItems;
