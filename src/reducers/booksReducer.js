import {
  RECEIVE_BOOKS
} from '../actions/book_actions';

import merge from 'lodash/merge';

const booksReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BOOKS:
      return merge([], state, action.books);
    default:
      return state;
  }
};

export default booksReducer;
