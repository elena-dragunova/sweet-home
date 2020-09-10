import axios from '../../axios';

import {
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
  SET_TRENDING_PRODUCTS,
  SET_BEST_SELLERS,
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

export function setTrendingProducts(products) {
  const trendingProducts = [];
  Object.values(products).map((category) => {
    return category.map((sub) => {
      return Object.values(sub).map((item) => {
        return item.forEach((product) => {
          if (product.trending) {
            trendingProducts.push(product);
          }
        })
      })
    })
  });

  return {
    type: SET_TRENDING_PRODUCTS,
    trendingProducts,
  }
}

export function setBestSellers(products) {
  const bestSellers = [];
  Object.values(products).map((category) => {
    return category.map((sub) => {
      return Object.values(sub).map((item) => {
        return item.forEach(product => {
          if (product.best_seller) {
            bestSellers.push(product);
          }
        })
      })
    })
  });

  return {
    type: SET_BEST_SELLERS,
    bestSellers,
  }
}

export function fetchProducts() {
  return async dispatch => {
    dispatch(fetchProductsStart());
    try {
      const response = await axios.get('/catalog/categories.json');
      const data = response.data;
      dispatch(fetchProductsSuccess(data));
      dispatch(setTrendingProducts(data));
      dispatch(setBestSellers(data));
    } catch(err) {
      dispatch(fetchProductsError(err));
    }
  }
}
