import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import reducers from './reducers'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './app'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

ReactDOM.render(
  <Provider
    store={createStoreWithMiddleware(
      reducers,
    )}
  >
    <App />
  </Provider>,
  document.getElementById('root')
)