import axios from '../../axios';
import {
  FETCH_ARTICLES_ERROR,
  FETCH_ARTICLES_START,
  FETCH_ARTICLES_SUCCESS,
} from './actionTypes';

export function fetchArticlesStart() {
  return {
    type: FETCH_ARTICLES_START,
  }
}

export function fetchArticlesSuccess(articles) {
  return {
    type: FETCH_ARTICLES_SUCCESS,
    articles,
  }
}

export function fetchArticlesError(err) {
  return {
    type: FETCH_ARTICLES_ERROR,
    err,
  }
}

export function fetchArticles() {
  return async dispatch => {
    dispatch(fetchArticlesStart());
    try {
      const response = await axios.get('/blog.json');
      const data = response.data;
      dispatch(fetchArticlesSuccess(data));
    } catch(err) {
      dispatch(fetchArticlesError(err))
    }
  }
}
