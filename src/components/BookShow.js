import React, { Component } from 'react';

class BookShow extends Component {
  componentDidMount() {
    // check on props change to make this optimized
    if (this.props.book.title === '') {
      this.props.fetchBooks();
    }
  }

  render() {
    const { title, author, description, amazon_product_url, book_image } = this.props.book;
    // debugger;
    return (

        <div className=" book-show">
          <div className="book-details">
            <h5>Title: {title}</h5>
            <h5>Author: {author}</h5>
            <h5>Description: {description}</h5>
            <h5>Amazon Product URL: {<a href={amazon_product_url}>{amazon_product_url}</a>}</h5>
          </div>
          <a className="link" href={amazon_product_url}><img alt='' className="book-show-img z-depth-5" src={book_image} /></a>
        </div>

    );
  }
}

export default BookShow;
