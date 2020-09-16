import React, { Component } from 'react'
import styles from './QuantityInput.module.css'

class QuantityInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: this.props.quantity
    }
  }

  decrementButtonHandler () {
    this.setState((state) => {
      if (state.quantity !== this.props.minVal) {
        return {quantity: state.quantity--}
      }
      return {state}
    });
    this.props.onChange(this.state.quantity);
  }

  incrementButtonHandler () {
    this.setState((state) => {
      if (state.quantity !== this.props.maxVal) {
        return {quantity: state.quantity++}
      }

      return state;
    });
    this.props.onChange(this.state.quantity);
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
