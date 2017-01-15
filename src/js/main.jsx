import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import '!style-loader!css-loader!bootstrap-css-only'; // eslint-disable-line
import '!style-loader!css-loader!normalize.css'; // eslint-disable-line

import reducer from './reducers';
import App from './components/App';

const store = createStore(reducer);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
