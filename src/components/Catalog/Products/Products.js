import React from 'react'
import styles from './Products.module.css'
import ProductCard from '../../common/ProductCard/ProductCard'

export default props => (
  <div className={styles.Products}>
    {
      props.products.map((product) => (
        <ProductCard key={product.id}
                     item={product}/>
      ))
    }
  </div>
)