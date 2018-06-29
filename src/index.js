import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import './materialize.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import entitiesReducer from './reducers/entitiesReducer';
import ReduxThunk from 'redux-thunk';

const store = createStore(entitiesReducer, {}, applyMiddleware(ReduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
