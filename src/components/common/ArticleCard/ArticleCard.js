import React from 'react'
import Moment from 'react-moment';
import styles from './ArticleCard.module.css'
import { Link } from 'react-router-dom'
import Badge from '../../UI/Badge/Badge'
import { truncateText } from '../../../utils'

export default props => {
  const articleDate = new Date(props.article.date * 1000);

  return (
    <div className={styles.ArticleCard}>
      <div className={styles.main}>
        <div className={styles.imageWrapper}>
          <img src={props.article.image} alt=""/>
        </div>
        <Badge text={props.article.category}/>
        <div className={styles.data}>
          <p className={styles.author}>{props.article.author}.</p>
          <p className={styles.date}>
            <Moment format="MMM DD, YYYY">
              {articleDate}
            </Moment>
          </p>
        </div>
        <h4 className={styles.title}>{props.article.title}</h4>
        <p>{truncateText(props.article.text)}</p>
      </div>

      <Link to="/"
            exact="exact"
            className={styles.link}>
        Read More
        <i className="fas fa-chevron-right"></i>
      </Link>
    </div>
  )
}
