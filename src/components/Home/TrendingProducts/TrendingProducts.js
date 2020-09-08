import React, { Component } from 'react'
import styles from './TrendingProducts.module.css'
import {connect} from 'react-redux'
import Loader from '../../UI/Loader/Loader'
import ProductCard from '../../common/ProductCard/ProductCard'

class TrendingProducts extends Component {

  render() {
    return (
      <div className="container">
        <div className={styles.TrendingProducts}>
          <h2 className="title">Trending Products</h2>
          <p>Top view in this week</p>
          {
            this.props.trendingProducts
              ? <div className={styles.TrendingProductsContainer}>
                {
                  this.props.trendingProducts.map(item => (
                    <ProductCard key={item.id} item={item}/>
                  ))
                }
              </div>
              : <Loader />
          }
        </div>
      </div>

    )
  }
}

function mapStateToProps(state) {
  return {
    trendingProducts: state.products.trendingProducts,
  }
}

export default connect(mapStateToProps)(TrendingProducts)
