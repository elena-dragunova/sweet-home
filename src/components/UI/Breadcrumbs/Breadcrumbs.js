import React from 'react'
import styles from './Breadcrumbs.module.css'
import { NavLink } from 'react-router-dom';

export default props => {
  const url = props.url.split('/');

  return (
    <ul className={styles.Breadcrumbs}>
      <li>
        <NavLink to="/"
                 exact="exact"
                 className={styles.BreadcrumbsLink}
                 activeClassName={styles.Active}
        >Home</NavLink>
      </li>
      {
        url.map((link) => {
          if (link !== '') {
            const endOfThePath = props.url.indexOf(link) + link.length;
            const path = props.url.substr(0, endOfThePath);

            return (
              <li>
                <NavLink to={path}
                         exact="exact"
                         className={styles.BreadcrumbsLink}
                         activeClassName={styles.Active}
                >{link}</NavLink>
              </li>
            )
          }
          return null;
        })
      }
    </ul>
  )
}
