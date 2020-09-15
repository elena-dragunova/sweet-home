import React from 'react'
import styles from './CatalogFilter.module.css'
import CategoryFilter from '../CategoryFilter/CategoryFilter';

export default props => {
  return (
    <div>
      {
        props.categories.length > 0
          ? <CategoryFilter categories={props.categories}
                            onChange={props.onChange}/>
          : null
      }
    </div>
  )

}
