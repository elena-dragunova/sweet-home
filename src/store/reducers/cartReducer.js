import {
  ADD_PRODUCT_TO_CART,
  TOGGLE_CART
} from '../actions/actionTypes';

const initialState = {
  cart: [],
  open: false,
};

export default function cartReducer (state = initialState, action) {
  switch(action.type) {
    case TOGGLE_CART:
      const cartStatus = !state.open;
      return {
        ...state,
        open: cartStatus,
      };
    case ADD_PRODUCT_TO_CART:
      const cart = state.cart;
      const currentItemIndex = cart.findIndex((item) => {
        return item.id === action.product.id;
      });
      if (currentItemIndex >= 0) {
        cart.splice(currentItemIndex, 1, {
          ...cart[currentItemIndex],
          quantity: cart[currentItemIndex].quantity + action.product.quantity,
        })
      } else {
        cart.push(action.product);
      }

      return {
        ...state,
        cart,
      };
    default:
      return state;
  }
}
