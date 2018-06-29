import React from 'react';
import Main from './Main';
import BookShowContainer from './BookShowContainer';
import { Route, Switch, Redirect } from 'react-router-dom';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/books" component={Main} />
      <Route exact path="/books/:bookId" component={BookShowContainer} />
      <Redirect to="/books" />
    </Switch>
  </div>
);

export default App;
