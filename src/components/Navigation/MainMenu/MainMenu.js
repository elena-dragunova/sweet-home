import React, {Component} from 'react'
import styles from './MainMenu.module.css'
import Dropdown from '../../UI/Dropdown/Dropdown'
import { NavLink } from 'react-router-dom'

class MainMenu extends Component {
  renderLinks(links) {
    return links.map((item, index) => {
        if (item.items) {
          return (
            <Dropdown
              key={index}
              title={item.title}
              items={item.items}/>
          )
        } else {
          return (
            <NavLink key={index}
                     to={item.to}
                     exact={item.exact}
                     className={styles.menuItem}
                     activeClassName={styles.isActive}>
              {item.title}
            </NavLink>
          )
        }
      })
  }

  render() {
    return (
      <nav className={styles.MainMenu}>
        {this.renderLinks(this.props.menuItems)}
      </nav>
    )
  }
}

export default MainMenu