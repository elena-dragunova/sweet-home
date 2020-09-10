import {combineReducers} from 'redux'
import productsReducer from './productsReducer'
import blogReducer from './blogReducer'

export default combineReducers({
  products: productsReducer,
  blog: blogReducer,
});
