import React from 'react'
import styles from './Footer.module.css'
import Logo from '../../UI/Logo/Logo';
import SocialIcons from '../../UI/SocialIcons/SocialIcons';
import { NavLink } from 'react-router-dom'

export default () => (
  <div className={styles.Footer}>
    <div className={styles.FooterMain}>
      <div className="container">
        <div className={styles.FooterContainer}>

          <div className={styles.FooterColumn}>
            <Logo color="white"/>
            <div className={styles.Social}>
              <SocialIcons color="white"/>
            </div>
          </div>

          <div className={styles.FooterColumn}>
            <h4 className={styles.Title}>
              Information Company
            </h4>
            <ul className={styles.FooterMenu}>
              <li>
                <NavLink to="/my-account"
                         exact
                         className={styles.FooterLink}
                         activeClassName={styles.Active}>
                  My Account</NavLink>
              </li>
              <li>
                <NavLink to="/track"
                         exact
                         className={styles.FooterLink}
                         activeClassName={styles.Active}>
                  Track Your Order</NavLink>
              </li>
              <li>
                <NavLink to="/faq"
                         exact
                         className={styles.FooterLink}
                         activeClassName={styles.Active}>
                  FAQs</NavLink>
              </li>
              <li>
                <NavLink to="/payment-methods"
                         exact
                         className={styles.FooterLink}
                         activeClassName={styles.Active}>
                  Payment Methods</NavLink>
              </li>
              <li>
                <NavLink to="/shipping-guide"
                         exact
                         className={styles.FooterLink}
                         activeClassName={styles.Active}>
                  Shipping Guide</NavLink>
              </li>
              <li>
                <NavLink to="/products-support"
                         exact
                         className={styles.FooterLink}
                         activeClassName={styles.Active}>
                  Products Support</NavLink>
              </li>
              <li>
                <NavLink to="/gift-card-balance"
                         exact
                         className={styles.FooterLink}
                         activeClassName={styles.Active}>
                  Gift Card Balance</NavLink>
              </li>
            </ul>
          </div>

          <div className={styles.FooterColumn}>
            <h4 className={styles.Title}>More From Sweet Home</h4>
            <ul className={styles.FooterMenu}>
              <li>
                <NavLink to="/about"
                         exact
                         className={styles.FooterLink}
                         activeClassName={styles.Active}>
                  About Sweet Home</NavLink>
              </li>
              <li>
                <NavLink to="/guarantees"
                         exact
                         className={styles.FooterLink}
                         activeClassName={styles.Active}>
                  Our Guarantees</NavLink>
              </li>
              <li>
                <NavLink to="/terms"
                         exact
                         className={styles.FooterLink}
                         activeClassName={styles.Active}>
                  Terms and Conditions</NavLink>
              </li>
              <li>
                <NavLink to="/privacy-policy"
                         exact
                         className={styles.FooterLink}
                         activeClassName={styles.Active}>
                  Privacy Policy</NavLink>
              </li>
              <li>
                <NavLink to="/return-policy"
                         exact
                         className={styles.FooterLink}
                         activeClassName={styles.Active}>
                  Return Policy</NavLink>
              </li>
              <li>
                <NavLink to="/delivery"
                         exact
                         className={styles.FooterLink}
                         activeClassName={styles.Active}>
                  Delivery and Return</NavLink>
              </li>
            </ul>
          </div>

          <div className={styles.FooterColumn}>
            <div className={styles.Contacts}>
              <h4 className={styles.Title}>Let's Talk</h4>
              <p>
                <i className="fa fa-phone" aria-hidden="true"></i>
                +391(0)35 2568 4593
              </p>
              <p>
                <i className="fa fa-envelope" aria-hidden="true"></i>
                sweet-home@gmail.com
              </p>
            </div>

            <div className={styles.Contacts}>
              <h4 className={styles.Title}>Find Us</h4>
              <p>
                <i className="fas fa-map-marker-alt"></i>
                502 New Design Str Melbourne, Australia
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div className={styles.FooterCopyright}>
     <div className="container">
        <div className={styles.FooterContainer}>
          <p>
            <span className={styles.Copy}>&copy; 2020 Sweet Home.</span>
            All Rights Reserved
          </p>
        </div>
     </div>
    </div>
  </div>
)
