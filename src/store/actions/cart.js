import axios from '../../axios';

import {
  ADD_PRODUCT_TO_CART,
} from './actionTypes';


export function addProductToCart(product) {
  return {
    type: ADD_PRODUCT_TO_CART,
    product,
  }
}
