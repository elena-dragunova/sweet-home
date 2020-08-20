import React from 'react'
import styles from './Logo.module.css'

export default props => {
  const cls = [
    styles.Logo,
    styles[props.color]
  ];

  return (
    <div className={cls.join(' ')}>
      Sweet Home
    </div>
  )
}