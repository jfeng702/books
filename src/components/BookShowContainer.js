import { connect } from 'react-redux';
import { fetchBooks } from '../actions/book_actions';
import BookShow from './BookShow';

function mapStateToProps({ books }, ownProps){
  let book;
  const bookId = ownProps.match.params.bookId;
  if (books[bookId]) {
    book = books[bookId];
  } else {
    book = {title: ''};
  }
  
  return {
    book
  };
}


export default connect(mapStateToProps, { fetchBooks })(BookShow);
