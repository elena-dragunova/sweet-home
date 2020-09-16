import React from 'react'
import styles from './ProductCard.module.css'
import { NavLink } from 'react-router-dom'

export default (props) => (

  <div className={styles.ProductCard}>
    <div className={styles.ProductCard_main}>
      <div className={styles.imageWrapper}>
        <img src={props.item.options[0].image} alt=""/>
      </div>
    </div>

    <div className={styles.ProductCard_text}>
      <h4>
        <NavLink to={`/product/${props.item.id}`}
                 exact
                 className={styles.ProductCardLink}
                 activeClassName={styles.Active}>
          {props.item.name}
        </NavLink>
      </h4>
      <div className={styles.ProductCard_price}>
        <p>$ {props.item.price.toFixed(2)}</p>
        {
          props.item.options.length > 1
            ? <div>
              {
                props.item.options.map((option, index) => (
                  <span key={index}
                        className={styles.color}
                        style={{background: option.color}}>

                  </span>
                ))
              }
              </div>
            : null
        }
      </div>
    </div>
  </div>

)
