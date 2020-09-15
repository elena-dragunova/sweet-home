import React from 'react'
import styles from './CategoryFilter.module.css'

export default props => (
  <div className={styles.CategoryFilter}>
    <h4>Product Categories</h4>
    {
      props.categories.map((category, index) => {

        return (
          <label htmlFor={"category" + index}
                 className={styles.CategoryCheckbox}
                 key={index}>
            {category}
            <input id={"category" + index}
                   name={category}
                   type="checkbox"
                   onChange={props.onChange}/>
            <span className={styles.checkmark} />
          </label>
        )
      })
    }
  </div>
)
