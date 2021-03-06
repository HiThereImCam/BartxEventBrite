import React from 'react';
import ReactDOM from 'react-dom';
import './_index.scss';
import App from './Components/App/App';
// import reducer from './reducers';
// import middleware from './middleware';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
import * as serviceWorker from './serviceWorker';

const rootEl = document.getElementById('root')
// const store = createStore(reducer, middleware);

ReactDOM.render(

  // <Provider store = { store }>
  //    <App />
  // </Provider>,
  <App />,
  rootEl
)

if (module.hot) {
  module.hot.accept('./Components/App/App', () => {
    const App = require('./Components/App/App').default
    ReactDOM.render(
      <App />,
      rootEl
    )
  })
}
    

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
