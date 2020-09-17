import React, { Component } from 'react'
import styles from './Cart.module.css'
import { connect } from 'react-redux';

class Cart extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   cart: this.props.cart,
    // }
  }

  render() {
    return (
      <div className={styles.Cart}>
        {
          this.props.cart.length > 0
          ? <div>
              {this.props.cart.map((cartItem) => (
                <p>{ cartItem.name }</p>
              ))}
            </div>
          : <p>Your cart is empty</p>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart.cart,
  }
}

export default connect(mapStateToProps)(Cart)
