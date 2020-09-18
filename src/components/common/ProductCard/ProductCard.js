import React, { Component } from 'react'
import styles from './ProductCard.module.css'
import { NavLink } from 'react-router-dom'
import { connect } from "react-redux"
import {addProductToCart, toggleCart} from "../../../store/actions/cart";

class ProductCard extends Component {
  constructor(props){
    super(props);
  }

  addToCartHandler () {
    const product = {
      id: this.props.item.id,
      name: this.props.item.name,
      price: this.props.item.price,
      vendor: this.props.item.vendor,
      image: this.props.item.options[0].image,
      color: this.props.item.options[0].color,
      quantity: 1,
      maxVal: this.props.item.options[0].quantity,
    };
    this.props.addProductToCart(product);
    this.props.toggleCart();
  }

  render() {
    return (
      <div className={styles.ProductCard}>
        <div className={styles.ProductCardMain}>

          <span className={styles.AddToCart} onClick={this.addToCartHandler.bind(this)}>
            <i className="fas fa-shopping-cart"></i>
          </span>

          <div className={styles.imageWrapper}>
            <img src={this.props.item.options[0].image} alt=""/>
          </div>
        </div>

        <div className={styles.ProductCard_text}>
          <h4>
            <NavLink to={`/product/${this.props.item.id}`}
                     exact
                     className={styles.ProductCardLink}
                     activeClassName={styles.Active}>
              {this.props.item.name}
            </NavLink>
          </h4>
          <div className={styles.ProductCard_price}>
            <p>$ {this.props.item.price.toFixed(2)}</p>
            {
              this.props.item.options.length > 1
                ? <div>
                  {
                    this.props.item.options.map((option, index) => (
                      <span key={index}
                            className={styles.color}
                            style={{background: option.color}}>

                  </span>
                    ))
                  }
                </div>
                : null
            }
          </div>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addProductToCart: (product) => dispatch(addProductToCart(product)),
    toggleCart: () => dispatch(toggleCart()),
  }
}


export default connect(null, mapDispatchToProps)(ProductCard)
