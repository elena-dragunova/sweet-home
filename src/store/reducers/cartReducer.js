import {
  ADD_PRODUCT_TO_CART,
  DELETE_PRODUCT,
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
        return item.id === action.product.id && item.color === action.product.color;
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
    case DELETE_PRODUCT:
      const currentCart = state.cart;
      const itemIndex = currentCart.findIndex(item => {
        return item.id === action.product.id && item.color === action.product.color
      });
      currentCart.splice(itemIndex, 1);
      return {
        ...state,
        cart: currentCart,
      };
    default:
      return state;
  }
}
