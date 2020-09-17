import axios from '../../axios';

import {
  ADD_PRODUCT_TO_CART,
  TOGGLE_CART,
} from './actionTypes';


export function addProductToCart(product) {
  return {
    type: ADD_PRODUCT_TO_CART,
    product,
  }
}

export function toggleCart() {
  return {
    type: TOGGLE_CART
  }
}
