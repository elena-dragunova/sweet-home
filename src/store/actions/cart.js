import {
  TOGGLE_CART,
  ADD_PRODUCT_TO_CART,
  DELETE_PRODUCT,
} from './actionTypes';

export function toggleCart() {
  return {
    type: TOGGLE_CART
  }
}


export function addProductToCart(product) {
  return {
    type: ADD_PRODUCT_TO_CART,
    product,
  }
}

export function deleteProduct(product) {
  return {
    type: DELETE_PRODUCT,
    product,
  }
}
