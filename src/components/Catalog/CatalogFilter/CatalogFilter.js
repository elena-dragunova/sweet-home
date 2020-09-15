import React from 'react'
import styles from './CatalogFilter.module.css'
import CategoryFilter from '../CategoryFilter/CategoryFilter';
import ColorFilter from '../ColorFilter/ColorFilter';

export default props => {
  return (
    <div>
      {
        props.categories.length > 0
          ? <CategoryFilter categories={props.categories}
                            onChange={props.onCategoriesChange}/>
          : null
      }
      {
        props.colors.length > 0
          ? <ColorFilter colors={props.colors}
                         onChange={props.onColorsChange}/>
          : null
      }
    </div>
  )

}
