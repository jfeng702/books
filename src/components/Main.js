import React, { Component } from 'react';
import { fetchBooks } from '../actions/book_actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Main extends Component {

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    return (

      <div className="container center-align photo-container">
        <h1>Bestselling Books</h1>
        {
          this.props.books.map((book, id) => (
          <Link className='' key={id} to={`/books/${id}`}>
            <img className="z-depth-5 photo-link" alt='' src={book.book_image} />
          </Link>)
          )
        }
      </div>
    );
  }
}

function mapStateToProps({ books }) {
  return { books };
}

export default connect(mapStateToProps, { fetchBooks })(Main);
