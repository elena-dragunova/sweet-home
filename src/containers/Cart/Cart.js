import React, { Component } from 'react'
import styles from './Cart.module.css'
import { connect } from 'react-redux';
import QuantityInput from '../../components/UI/QuantityInput/QuantityInput';
import { deleteProduct } from '../../store/actions/cart';
import Button from '../../components/UI/Button/Button';
import {Link} from 'react-router-dom';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: this.props.cart.cart,
    }
  }

  handleQuantityChange(cartItem, quantity) {
    this.setState(() => {
      const cart = this.props.cart.cart;
      const currentItemIndex = cart.findIndex(item => {
        return item.id === cartItem.id && item.color === cartItem.color;
      });
      cart.splice(currentItemIndex, 1, {
        ...cart[currentItemIndex],
        quantity,
      });
      return {
        cart,
      }
    })
  }

  removeItemHandler(cartItem) {
    this.props.deleteProduct(cartItem);
  }

  renderCartItem(cartItem) {
    const totalItemPrice = (cartItem.price * cartItem.quantity).toFixed(2);

    return (
      <div key={cartItem.id + cartItem.color} className={styles.CartItem}>

        <div className={styles.CartItemImage}>
          <div className={styles.ImageWrapper}>
            <img src={cartItem.image} alt=""/>
          </div>
        </div>

        <div className={styles.CartItemInfo}>
          <h5>{cartItem.name}</h5>
          <p>{cartItem.vendor}</p>
          <p className={styles.CartItemPrice}>$ {cartItem.price}</p>
          <div className={styles.CartItemActions}>
            <QuantityInput quantity={cartItem.quantity}
                           minVal={1}
                           maxVal={cartItem.maxVal}
                           onChange={this.handleQuantityChange.bind(this, cartItem)}/>
            <div className={styles.Remove}>
              <Button text="Remove"
                      buttonStyle="MainButton"
                      onClick={this.removeItemHandler.bind(this, cartItem)}/>
            </div>
          </div>
        </div>

        <div className={styles.CartItemTotal}>
          <h4>$ {totalItemPrice}</h4>
        </div>
      </div>
    )
  }

  render() {
    let totalPrice = 0;
    this.state.cart.forEach((cartItem) => {
      totalPrice += cartItem.price * cartItem.quantity;
    });

    return (
      <div className="container">
        <div className={styles.Cart}>
          <h2>Shopping Cart</h2>

          {
            this.state.cart.length > 0
              ? <div className={styles.CartTable}>
                  <div className={styles.CartHeader}>
                    <h4 className={styles.CartImageTitle}>Image</h4>
                    <h4 className={styles.CartProductTitle}>Product</h4>
                    <h4 className={styles.CartTotalTitle}>Total</h4>
                  </div>
                  {this.state.cart.map((cartItem) => {
                    return this.renderCartItem(cartItem)
                  })}
                  <div className={styles.CartFooter}>
                    <h4>Subtotal:
                      <span className={styles.TotalPrice}>
                        $ {totalPrice.toFixed(2)}
                      </span>
                    </h4>
                    <p>Shipping, taxes and discounts will be calculated at checkout.</p>
                    <Link to="/"
                          className={styles.CheckoutBtn}>
                      <Button text="Checkout"
                              buttonStyle="AccentButton"
                              onClick={this.props.onClose}/>
                    </Link>
                  </div>
                </div>
              : <p>Your cart is currently empty</p>
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteProduct: (product) => dispatch(deleteProduct(product)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
