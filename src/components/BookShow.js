import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BookShow extends Component {
  componentDidMount() {
    // check on props change to make this optimized
    if (this.props.book.title === '') {
      this.props.fetchBooks();
    }
  }

  render() {
    const { title, author, description, amazon_product_url, book_image }
      = this.props.book;
    return (

        <div className=" book-show">
          <Link to="/books">Back</Link>
          <h4>Book Details</h4>
          <div className="book-details">
            <h5 className='test'><span>Title:</span> {title}</h5>
            <h5><span>Author:</span> {author}</h5>
            <h5><span>Description:</span> {description}</h5>
            <h5>
              <span>Amazon Product URL:</span>
              {<a href={amazon_product_url}>{amazon_product_url}</a>}
            </h5>
          </div>
          <a className="link" href={amazon_product_url}>
            <img alt=''
              className="book-show-img z-depth-5"
              src={book_image} />
          </a>
        </div>

    );
  }
}

export default BookShow;
