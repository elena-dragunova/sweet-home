import React from 'react'
import styles from './PromoCollection.module.css'
import image from '../../../assets/img/office-stools.png'
import Button from '../../UI/Button/Button';

export default () => {
  function onClickHandler (e) {
    console.log(e.target);
  }

  return (
    <div className={styles.PromoCollection}>
      <div className="container">
        <div className={styles.PromoCollectionSection}>
          <div>
            <img src={image} alt=""/>
          </div>
          <div className={styles.main}>
            <h5>Quick parcel delivery, <span>from $25</span></h5>
            <h2>Shop The New Brands <br/>Up To 40% Now</h2>
            <p>Lorem ipsum dolor</p>
            <Button buttonStyle='MainButton'
                    onClick={onClickHandler.bind(this)}>
              Shop Collection
              <i className="fas fa-chevron-right"></i>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
