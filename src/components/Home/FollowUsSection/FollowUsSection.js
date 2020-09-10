import React from 'react'
import styles from './FollowUsSection.module.css'
import insta1 from '../../../assets/img/insta1.jpeg'
import insta2 from '../../../assets/img/insta2.jpeg'
import insta3 from '../../../assets/img/insta3.jpeg'
import insta4 from '../../../assets/img/insta4.jpeg'
import insta5 from '../../../assets/img/insta5.jpeg'
import insta6 from '../../../assets/img/insta6.jpeg'
import { Link } from 'react-router-dom'

export default () => (
  <div className="container">
    <div className={styles.FollowUsSection}>
      <h2>Follow us on Instagram</h2>
      <p>@Sweet Home Instagram</p>
      <div className={styles.FollowUsContainer}>
        <Link to="/"
              className={styles.FollowUsItem}>
          <div className={styles.ImageWrapper}>
            <img src={insta1} alt=""/>
          </div>
        </Link>

        <Link to="/"
              className={styles.FollowUsItem}>
          <div className={styles.ImageWrapper}>
            <img src={insta2} alt=""/>
          </div>
        </Link>

        <Link to="/"
              className={styles.FollowUsItem}>
          <div className={styles.ImageWrapper}>
            <img src={insta3} alt=""/>
          </div>
        </Link>

        <Link to="/"
              className={styles.FollowUsItem}>
          <div className={styles.ImageWrapper}>
            <img src={insta4} alt=""/>
          </div>
        </Link>

        <Link to="/"
              className={styles.FollowUsItem}>
          <div className={styles.ImageWrapper}>
            <img src={insta5} alt=""/>
          </div>
        </Link>

        <Link to="/"
              className={styles.FollowUsItem}>
          <div className={styles.ImageWrapper}>
            <img src={insta6} alt=""/>
          </div>
        </Link>
      </div>
    </div>
  </div>
)
