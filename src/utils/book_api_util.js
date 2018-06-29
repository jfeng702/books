import $ from 'jquery';
// export const fetchBooks = () => (
//   fetch('https://api.nytimes.com/svc/books/v3/lists/overview.jsonp?callback=foobar&api-key=a2ec9f79f8f541f49b7852d013f1cbd2')
//           .then((response) => response.text())
//           .then((responseText) => {
//               const match = responseText.match(/foobar\((.+)\)/);
//               if (! match) throw new Error('invalid JSONP response');
//               // console.log(JSON.parse(match[1]));
//               const parsedObject = JSON.parse(match[1]);
//               const bookLists = parsedObject.results.lists;
//               const books = [];
//               for (let list of bookLists) {
//                 for (let book of list.books) {
//                   books.push(book);
//                 }
//               }
//               return books;
//
//           })
//           .catch((error) => {
//               console.error(error);
//           })
// );

export const fetchBooks = () => (
  $.ajax({
    url: 'https://api.nytimes.com/svc/books/v3/lists/overview.jsonp?callback=foobar&api-key=a2ec9f79f8f541f49b7852d013f1cbd2',
    dataType: 'jsonp'
  })
);
