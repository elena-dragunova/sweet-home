import axios from '../../axios';

import {
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
} from './actionTypes';

export function fetchProductsStart() {
  return {
    type: FETCH_PRODUCTS_START,
  }
}

export function fetchProductsSuccess(products) {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    products,
  }
}

export function fetchProductsError(error) {
  return {
    type: FETCH_PRODUCTS_ERROR,
    error,
  }
}

export function fetchProducts() {
  return async dispatch => {
    dispatch(fetchProductsStart());
    try {
      const response = await axios.get('/catalog/categories.json');
      const data = response.data;
      dispatch(fetchProductsSuccess(data));
    } catch(err) {
      dispatch(fetchProductsError(err));
    }
  }
}
