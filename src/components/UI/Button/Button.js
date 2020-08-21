import React from 'react'
import styles from './Button.module.css'

export default props => (
  <button className={styles[props.type]}>
    {props.text}
    {props.children}
  </button>
)