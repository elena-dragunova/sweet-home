import React from 'react'
import styles from './ColorCheckbox.module.css'

export default props => (
  <div style={{background: props.color}}
       className={styles.ColorCheckbox}>
    <input name={props.color}
           type="checkbox"
           onChange={props.onChange}/>
    <span className={styles.Checkmark} />
  </div>
)
