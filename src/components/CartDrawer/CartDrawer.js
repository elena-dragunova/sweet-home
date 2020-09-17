import React, { Component } from 'react'
import styles from './CartDrawer.module.css'
import { connect } from 'react-redux';
import CloseButton from '../UI/CloseButton/CloseButton';
import QuantityInput from '../UI/QuantityInput/QuantityInput';
import Button from '../UI/Button/Button';
import { Link } from 'react-router-dom';
import { deleteProduct } from '../../store/actions/cart';

class CartDrawer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: this.props.cart.cart,
    };
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

  deleteButtonHandler (product) {
    this.props.deleteProduct(product);
  }

  render() {
    let totalPrice = 0;
    this.state.cart.forEach((cartItem) => {
      totalPrice += cartItem.price * cartItem.quantity;
    });

    return (
      <div className={styles.CartDrawer}>
        <div className={styles.CartDrawerTitle}>
          <h2>Shopping Cart</h2>
          <div className={styles.CloseBtn}>
            <CloseButton onClick={this.props.onClose}/>
          </div>
        </div>

        {
          this.state.cart.length > 0
            ? <div className={styles.CartMain}>
                <div className={styles.CartItems}>
                  {
                    this.state.cart.map((item) => (
                      <div className={styles.CartItem}
                           key={item.id + item.color}>
                        <div className={styles.CartItemImage}>
                          <div className={styles.ImageWrapper}>
                            <img src={item.image} alt=""/>
                          </div>
                        </div>

                        <div className={styles.CartItemInfo}>
                          <p>{item.name}</p>
                          <p>$ {item.price.toFixed(2)}</p>
                          <QuantityInput quantity={item.quantity}
                                         minVal={1}
                                         maxVal={item.maxVal}
                                         onChange={this.handleQuantityChange.bind(this, item)}/>
                        </div>
                        <div className={styles.DeleteBtn}>
                          <CloseButton onClick={this.deleteButtonHandler.bind(this, item)}/>
                        </div>
                      </div>
                    ))
                  }
                </div>
                <div className={styles.CartTotal}>
                  <h4>Subtotal</h4>
                  <p className={styles.TotalPrice}>$ {totalPrice.toFixed(2)}</p>
                </div>
                <p>Shipping, taxes and discounts will be calculated at checkout.</p>
                <Link to="/cart"
                      className={styles.WhiteBtn}>
                  <Button text="View Cart"
                          buttonStyle="WhiteButton"
                          onClick={this.props.onClose}/>
                </Link>
                <Link to="/"
                      className={styles.CheckoutBtn}>
                  <Button text="Checkout"
                          buttonStyle="AccentButton"
                          onClick={this.props.onClose}/>
                </Link>

              </div>
            : <p className={styles.EmptyCart}>Your cart is currently empty</p>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteProduct: (product) => dispatch(deleteProduct(product)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDrawer)
