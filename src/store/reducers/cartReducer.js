import {ADD_PRODUCT_TO_CART} from '../actions/actionTypes';

const initialState = {
  cart: [],
};

export default function cartReducer (state = initialState, action) {
  switch(action.type) {
    case ADD_PRODUCT_TO_CART:
      const cart = state.cart;
      cart.push(action.product);
      return {
        ...state,
        cart,
      };
    default:
      return state;
  }
}
