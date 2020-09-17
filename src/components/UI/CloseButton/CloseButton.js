import React from 'react'
import styles from './CloseButton.module.css'

export default props => (
  <button className={styles.CloseButton}
          onClick={props.onClick}>
    <i className="fas fa-times"></i>
  </button>
)
