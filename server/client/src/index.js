import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import rootReducer from './reducers'
import 'bootstrap/dist/css/bootstrap.min.css'


const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

ReactDOM.render(
  <Provider
    store={createStoreWithMiddleware(rootReducer)}>
    <Router >
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)