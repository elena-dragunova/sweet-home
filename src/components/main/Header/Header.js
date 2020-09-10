import React, {Component} from 'react'
import styles from './Header.module.css'
import SocialIcons from '../../UI/SocialIcons/SocialIcons'
import Badge from '../../UI/Badge/Badge'
import Logo from '../../UI/Logo/Logo'
import MainMenu from '../../Navigation/MainMenu/MainMenu'
import { NavLink } from 'react-router-dom'

const menuItems = [
  {
    title: 'Home',
    exact: true,
    to: '/'
  },
  {
    title: 'Catalog',
    items: [
      {
        id: 0,
        title: 'Furniture',
        to: '/catalog/furniture',
        exact: true,
      },
      {
        id: 1,
        title: 'Decorations',
        to: '/catalog/decorations',
        exact: true,
      },
      {
        id: 2,
        title: 'Home Textiles',
        to: '/catalog/textiles',
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
        to: '/catalog/furniture/chairs',
        exact: true,
      },
      {
        id: 1,
        title: 'Sofas',
        to: '/catalog/furniture/sofas',
        exact: true,
      },
      {
        id: 2,
        title: 'Cupboards',
        to: '/catalog/furniture/cupboards',
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

  state = {
    scrolling: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll = () => {
    if (window.scrollY === 0 && this.state.scrolling === true) {
      this.setState({scrolling: false});

    }
    else if (window.scrollY !== 0 && this.state.scrolling !== true) {
      this.setState({scrolling: true});
    }
  };

  render() {
    const cls = [styles.Header];

    if (this.state.scrolling) {
      cls.push(styles['scrolling']);
    }

    return (
      <header className={cls.join(' ')}>
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
            <SocialIcons color="grey"/>
          </div>
        </div>

        <div className={styles.bottom}>
          <Logo color="black"/>

          <MainMenu menuItems={menuItems}/>

          <div className={styles.right}>
            <div className={styles.auth}>
              <NavLink to='/auth'
                       exact
                       className={styles.linkIcon}
                       activeClassName={styles.isActive}>
                <i className="far fa-user"></i>
                Login / Sign up
              </NavLink>
            </div>
            <button className={styles.cartBtn}
                    onClick={this.props.onCartClick}>
              <i className="fas fa-shopping-cart"></i>
            </button>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
