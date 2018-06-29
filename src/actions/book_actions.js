import * as BookApiUtil from '../utils/book_api_util';

export const RECEIVE_BOOKS = 'RECEIVE_BOOKS';

export const receiveBooks = books => {
  return {
    type: RECEIVE_BOOKS,
    books
  };
};

export const fetchBooks = () => dispatch => {
  return BookApiUtil.fetchBooks()
    .then(response => {
      const bookLists = response.results.lists;
      const books = [];
      for (let list of bookLists) {
        for (let book of list.books) {
          books.push(book);
        }
      }
      dispatch(receiveBooks(books));
    });
};
