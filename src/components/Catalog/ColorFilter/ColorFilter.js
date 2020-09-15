import React from 'react'
import styles from './ColorFilter.module.css'
import ColorCheckbox from '../../UI/ColorCheckbox/ColorCheckbox';

export default props => (
  <div className={styles.ColorFilter}>
    <h4>Color</h4>
    <div className={styles.ColorFilterContainer}>
      {
        props.colors.map((color, index) => {
          return (
            <ColorCheckbox key={index} color={color} name={color}/>
          )
        })
      }
    </div>

  </div>
)
