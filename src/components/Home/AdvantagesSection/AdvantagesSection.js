import React from 'react'
import styles from './AdvantagesSection.module.css'
import { NavLink } from 'react-router-dom'
import Button from '../../UI/Button/Button';

export default () => (
  <div className={styles.AdvantagesSection}>
    <div className="container">
      <div className={styles.AdvantagesSectionContainer}>
        <div className={styles.AdvantagesItem}>
          <i className="far fa-paper-plane"></i>
          <h4>Free Worldwide Shipping</h4>
          <p>On all orders over $75</p>
          <NavLink to="/"
                   exact
                   className={styles.link}>
            Learn More
            <i className="fas fa-chevron-right"></i>
          </NavLink>
        </div>
        <div className={styles.AdvantagesItem}>
          <i className="far fa-credit-card"></i>
          <h4>100% Payment Secure</h4>
          <p>We ensure secure payment with PEV</p>
          <NavLink to="/"
                   exact
                   className={styles.link}>
            Learn More
            <i className="fas fa-chevron-right"></i>
          </NavLink>
        </div>
        <div className={styles.AdvantagesItem}>
          <i className="fas fa-undo-alt"></i>
          <h4>30 Days Return</h4>
          <p>Return it withing 20 day for an exchange</p>
          <NavLink to="/"
                   exact
                   className={styles.link}>
            Learn More
            <i className="fas fa-chevron-right"></i>
          </NavLink>
        </div>
      </div>
    </div>
  </div>
)
