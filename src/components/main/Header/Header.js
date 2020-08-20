import React, {Component} from 'react'
import styles from './Header.module.css'
import SocialIcons from '../../UI/SocialIcons/SocialIcons'
import Badge from '../../UI/Badge/Badge'
import Logo from '../../UI/Logo/Logo'
import MainMenu from '../../Navigation/MainMenu/MainMenu'

const menuItems = [
  {
    title: 'Home',
    exact: true,
    to: '/'
  },
  {
    title: 'Shop',
    items: [
      {
        id: 0,
        title: 'Furniture',
        to: '/furniture',
        exact: true,
      },
      {
        id: 1,
        title: 'Decorations',
        to: '/decorations',
        exact: true,
      },
      {
        id: 2,
        title: 'Home Textiles',
        to: '/textiles',
        exact: true,
      },
    ]
  },
  {
    title: 'Furniture',
    items: [
      {
        id: 0,
        title: 'Chairs',
        to: '/furniture/chairs',
        exact: true,
      },
      {
        id: 1,
        title: 'Sofas',
        to: '/furniture/sofas',
        exact: true,
      },
      {
        id: 2,
        title: 'Cupboards',
        to: '/furniture/cupboards',
        exact: true,
      },
    ]
  },
  {
    title: 'Blog',
    to: '/blog',
    exact: true,
  },
  {
    title: 'Contact Us',
    to: '/contacts',
    exact: true,
  },
];

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

        <div className={styles.bottom}>
          <div>
            <Logo color="black"/>
          </div>
          <div>
            <MainMenu menuItems={menuItems}/>
          </div>
          <div>333</div>
        </div>
      </header>
    )
  }
}

export default Header