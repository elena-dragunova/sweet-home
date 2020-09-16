import React from 'react'
import styles from './ProductBreadcrumbs.module.css'
import { NavLink } from 'react-router-dom';

export default props => (
  <div className={styles.ProductBreadcrumbs}>
    <ul className={styles.ProductBreadcrumbsMenu}>
      <li>
        <NavLink to="/"
                 className={styles.ProductBreadcrumbsLink}>Home</NavLink>
      </li>
      <li>
        <NavLink to={`/catalog/${props.cat}/${props.sub}`}
                 className={styles.ProductBreadcrumbsLink}>
          {props.sub}
        </NavLink>
      </li>
      <li>
        {props.name}
      </li>
    </ul>
  </div>
)
