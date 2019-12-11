import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
// import promise from 'redux-promise'
import rootReducer from './reducers'
import 'bootstrap/dist/css/bootstrap.min.css'


const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider
    store={store}>
    <Router >
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)