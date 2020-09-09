import React, { Component } from 'react'
import styles from './TrendingProducts.module.css'
import {connect} from 'react-redux'
import Loader from '../../UI/Loader/Loader'
import Button from '../../UI/Button/Button'
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

          <div className={styles.promo}>
            <div className={styles.promoItem}>
              <div className={styles.promoItemInner}>
                <p className={styles.promoText}>Quick parcel delivery, <span>from $25</span></p>
                <h4>Up To 70% Off Interior <br/> Home Decor</h4>
                <p>Lorem ipsum dolor</p>
                <Button type='MainButton'>
                  Shop Collection
                  <i className="fas fa-chevron-right"></i>
                </Button>
              </div>
            </div>
            <div className={styles.promoItem}>
              <div className={styles.promoItemInner}>
                <p className={styles.promoText}>Quick parcel delivery, <span>from $25</span></p>
                <h4>Up To 70% Off Interior <br/> Pendent Lamp</h4>
                <p>Lorem ipsum dolor</p>
                <Button type='MainButton'>
                  Shop Collection
                  <i className="fas fa-chevron-right"></i>
                </Button>
              </div>
            </div>
          </div>
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
