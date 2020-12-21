import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './app/app';

import { BrowserRouter } from 'react-router-dom';

const render = () => {
  const App = require('./app/App').default;

  ReactDOM.render(
    /* <Provider store={store}>*/
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    /* </Provider>*/ document.getElementById('root')
  );
};

render();
//we will need to add HRM in order to get this to work
// if (process.env.NODE_ENV === 'development' && module.hot) {
//   module.hot.accept('./app/App', render);
// }
