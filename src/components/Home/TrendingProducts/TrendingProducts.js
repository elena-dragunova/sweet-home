import React, { Component } from 'react'
import styles from './TrendingProducts.module.css'
import {connect} from 'react-redux'
import Loader from '../../UI/Loader/Loader'

class TrendingProducts extends Component {

  render() {
    return (
      <div>
        <h1>Trending Products</h1>
        {
          this.props.trendingProducts
          ? <div>
              {
                this.props.trendingProducts.map(item => (
                  <div key={item.id}>
                    <p>{item.name}</p>
                  </div>
                ))
              }
            </div>
            : <Loader />
        }
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
