import {
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  SET_BEST_SELLERS,
  SET_TRENDING_PRODUCTS
} from '../actions/actionTypes';

const initialState = {
  products: [],
  trendingProducts: null,
  bestSellers: null,
  loading: false,
  error: null,
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.products,
        loading: false,
      };
    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case SET_TRENDING_PRODUCTS:
      return {
        ...state,
        trendingProducts: action.trendingProducts,
      };
    case SET_BEST_SELLERS:
      return {
        ...state,
        bestSellers: action.bestSellers,
      };
    default:
      return state;
  }
}
