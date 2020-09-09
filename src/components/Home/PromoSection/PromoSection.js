import React from 'react'
import styles from './PromoSection.module.css'
import Button from '../../UI/Button/Button';

export default () => (
  <div className="container">
    <div className={styles.Promo}>
      <div className={styles.promoItem}>
        <div className={styles.promoItemInner}>
          <p className={styles.promoText}>Quick parcel delivery, <span>from $25</span></p>
          <h4>Up To 70% Off Interior <br/> Home Decor</h4>
          <p>Lorem ipsum dolor</p>
          <Button type='MainButton'>
            Shop Collection
            <i className="fas fa-chevron-right"></i>
          </Button>
        </div>
      </div>
      <div className={styles.promoItem}>
        <div className={styles.promoItemInner}>
          <p className={styles.promoText}>Quick parcel delivery, <span>from $25</span></p>
          <h4>Up To 70% Off Interior <br/> Pendent Lamp</h4>
          <p>Lorem ipsum dolor</p>
          <Button type='MainButton'>
            Shop Collection
            <i className="fas fa-chevron-right"></i>
          </Button>
        </div>
      </div>
    </div>
  </div>
)
