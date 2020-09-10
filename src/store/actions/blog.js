import axios from '../../axios';
import {
  FETCH_ARTICLES_ERROR,
  FETCH_ARTICLES_START,
  FETCH_ARTICLES_SUCCESS,
  GET_LAST_ARTICLES,
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

export function getLastArticles (articles) {
  const allArticles = [];
  Object.values(articles).map((category) => {
    return Object.values(category).map((item) => {
      return item.forEach(article => {
        allArticles.push(article)
      })
    })
  });
  const sortedArticles = allArticles.sort((a,b) => {
    return b.date - a.date;
  });

  let lastArticles;
  if (sortedArticles.length >= 3) {
    lastArticles = sortedArticles.slice(0, 3);
  } else {
    lastArticles = sortedArticles;
  }

  return {
    type: GET_LAST_ARTICLES,
    lastArticles,
  }
}

export function fetchArticles() {
  return async dispatch => {
    dispatch(fetchArticlesStart());
    try {
      const response = await axios.get('/blog.json');
      const data = response.data;
      dispatch(fetchArticlesSuccess(data));
      dispatch(getLastArticles(data));
    } catch(err) {
      dispatch(fetchArticlesError(err))
    }
  }
}
