import React from 'react'
import styles from './SocialIcons.module.css'

export default () => (
  <div className={styles.SocialIcons}>
    <a href="#">
      <i className="fab fa-facebook-f" aria-hidden="true"></i>
    </a>
    <a href="#">
      <i className="fab fa-twitter" aria-hidden="true"></i>
    </a>
    <a href="#">
      <i className="fab fa-instagram" aria-hidden="true"></i>
    </a>
    <a href="#">
      <i className="fab fa-pinterest" aria-hidden="true"></i>
    </a>
  </div>
)