import React from 'react'
import styles from './Badge.module.css'

export default props => (
  <span className={styles.Badge}>
    {props.text}
  </span>
)