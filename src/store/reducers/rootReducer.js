import {combineReducers} from 'redux'
import productsReducer from './productsReducer'
import blogReducer from './blogReducer'
import cartReducer from './cartReducer';

export default combineReducers({
  products: productsReducer,
  blog: blogReducer,
  cart: cartReducer,
});
