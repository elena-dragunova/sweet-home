import React, {Component} from 'react'
import styles from './ArticlesSection.module.css'
import {connect} from 'react-redux'
import Loader from '../../UI/Loader/Loader';
import ArticleCard from '../../common/ArticleCard/ArticleCard'

class ArticlesSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className={styles.ArticlesSection}>
          <h2>From Our Blog</h2>
          <p>Last articles from our blogs</p>

          {
            this.props.lastArticles
              ? <div className={styles.ArticlesContainer}>
                {
                  this.props.lastArticles.map((article) => (
                    <ArticleCard key={article.id}
                                 article={article}/>
                  ))
                }
              </div>
              : <Loader/>
          }
        </div>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    lastArticles: state.blog.lastArticles,
  }
}

export default connect(mapStateToProps)(ArticlesSection)
