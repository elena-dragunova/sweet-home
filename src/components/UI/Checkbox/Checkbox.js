import React from 'react'
import styles from './Checkbox.module.css'

export default props => {
  const cls = [
    styles.Checkbox,
    styles[props.color]
  ];

  return (
    <label htmlFor={props.id}
           className={cls.join(' ')}>
      {props.label}
      <input id={props.id}
             name={props.label}
             type="checkbox"
             onChange={props.onChange}/>
      <span className={styles.Checkmark} />
    </label>
  )
}
