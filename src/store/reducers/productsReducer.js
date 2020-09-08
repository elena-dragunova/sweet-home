import {FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS_START, FETCH_PRODUCTS_SUCCESS} from '../actions/actionTypes';

const initialState = {
  products: [],
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
    default:
      return state;
  }
}
