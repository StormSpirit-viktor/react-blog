import * as React from 'react'
import ArticleList from '../../components/blogPage/ArticleList'
import Tip from '../../components/blogPage/Tip'
import Archive from '../../components/blogPage/Archive'
import styles from './index.module.scss'

function BlogPage() {
  return (
    <div className={styles.blogPage}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Tip></Tip>
          <ArticleList></ArticleList>
        </div>
        <div className={styles.right}>
          <Archive></Archive>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;