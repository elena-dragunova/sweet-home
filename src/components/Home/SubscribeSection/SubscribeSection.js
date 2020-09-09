import React from 'react'
import styles from './SubscribeSection.module.css'
import SubscribeForm from '../SubscribeForm/SubscribeForm'

export default () => (
  <div className={styles.SubscribeSection}>
    <div className={styles.SubscribeSectionContainer}>
      <h4>Subscribe To Our Newsletter</h4>
      <p>Sign up for the weekly newsletter</p>
      <SubscribeForm />
      <p>We respect your privacy, so we never share your info.</p>
    </div>
  </div>
)
