import React, { Component } from 'react'
import styles from './BestSellers.module.css'
import {connect} from 'react-redux'
import Loader from '../../UI/Loader/Loader'
import ProductCard from '../../common/ProductCard/ProductCard'

class BestSellers extends Component {

  render() {
    return (
      <div className="container">
        <div className={styles.BestSellers}>
          <h2 className="title">Best Seller Products</h2>
          <p>Top sale in this week</p>
          {
            this.props.bestSellers
              ? <div className={styles.BestSellersContainer}>
                {
                  this.props.bestSellers.map(item => (
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
    bestSellers: state.products.bestSellers,
  }
}

export default connect(mapStateToProps)(BestSellers)
