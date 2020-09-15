import React from 'react'
import styles from './CategoryFilter.module.css'
import Checkbox from '../../UI/Checkbox/Checkbox';

export default props => (
  <div className={styles.CategoryFilter}>
    <h4>Product Categories</h4>
    {
      props.categories.map((category, index) => {

        return (
          <Checkbox label={category}
                    key={index}
                    id={'category' + index}
                    color="black"
                    onChange={props.onChange}/>
        )
      })
    }
  </div>
)
