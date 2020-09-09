import React from 'react'
import styles from './SubscribeSection.module.css'
import SubscribeForm from '../SubscribeForm/SubscribeForm'

export default () => (
  <div className={styles.SubscribeSection}>
    <div className={styles.SubscribeSectionContainer}>
      <SubscribeForm />
    </div>
  </div>
)
