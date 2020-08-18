import React, {Component} from 'react'
import styles from './Header.module.css'
import SocialIcons from '../../UI/SocialIcons/SocialIcons'
import Badge from '../../UI/Badge/Badge'

class Header extends Component  {
  render() {
    return (
      <header className={styles.Header}>
        <div className={styles.top}>
          <div className={styles.contacts}>
            <span>
              <i className="fa fa-phone" aria-hidden="true"></i>
              +391(0)35 2568 4593
            </span>
            <span>
              <i className="fa fa-envelope" aria-hidden="true"></i>
              sweet-home@gmail.com
            </span>
          </div>

          <div className={styles.promoContainer}>
            <p className={styles.promo}>
              Free shipping on all orders over
              <span>$79</span>
            </p>
            <Badge text="Shop Now!"/>
          </div>


          <div className={styles.social}>
            <SocialIcons/>
          </div>
        </div>
      </header>
    )
  }
}

export default Header