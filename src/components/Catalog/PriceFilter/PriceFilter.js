import React from 'react'
import styles from './PriceFilter.module.css'
import Checkbox from '../../UI/Checkbox/Checkbox';

export default props => (
  <div className={styles.PriceFilter}>
    <h4>Price</h4>

    {
      props.priceRanges.map((prices, index) => {
        const label = `$${prices[0]} - $${prices[1]}`;

        return (
          <Checkbox label={label}
                    key={index}
                    id={index}
                    color="gold"
                    onChange={props.onChange}/>
        )
      })
    }
  </div>
)
