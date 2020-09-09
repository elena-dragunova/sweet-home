import React from 'react'
import styles from './Button.module.css'

export default props => (
  <button className={styles[props.buttonStyle]}
          disabled={props.disabled}
          onClick={props.onClick}>
    {props.text}
    {props.children}
  </button>
)
