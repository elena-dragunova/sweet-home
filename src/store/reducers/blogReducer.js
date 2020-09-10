import {
  FETCH_ARTICLES_START,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_ERROR,
} from '../actions/actionTypes';

const initialState = {
  articles: [],
  loading: false,
  error: null,
  lastArticles: null,
};

export default function blogReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ARTICLES_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        loading: false,
        articles: action.articles
      };
    case FETCH_ARTICLES_ERROR:
      return {
        ...state,
        loading: false,
        err: action.err,
      };
    default:
      return state;
  }
}
