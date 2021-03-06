import React, { Component } from 'react'
import styles from './QuantityInput.module.css'

class QuantityInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: this.props.quantity
    }
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.quantity !== this.state.quantity) {
      this.setState(() => {
        return {quantity: nextProps.quantity}
      })
    }
  }

  decrementButtonHandler () {
    this.setState((state) => {
      if (state.quantity !== this.props.minVal) {
        const newQuantity = state.quantity - 1;
        this.props.onChange(newQuantity);
        return {quantity: newQuantity}
      }
      return {state}
    });
  }

  incrementButtonHandler () {
    this.setState((state) => {
      if (state.quantity !== this.props.maxVal) {
        const newQuantity = state.quantity + 1;
        this.props.onChange(newQuantity);
        return {quantity: newQuantity}
      }
      return state;
    });

  }

  render () {
    return (
      <div className={styles.QuantityInput}>
        <button className={styles.DecrementButton}
                onClick={this.decrementButtonHandler.bind(this)}> - </button>
        <div className={styles.QuantityInputValue}>
          {this.state.quantity}
        </div>
        <button className={styles.IncrementButton}
                onClick={this.incrementButtonHandler.bind(this)}>+</button>
      </div>
    )
  }

}


export default QuantityInput
