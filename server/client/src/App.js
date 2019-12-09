import React, { Component } from 'react'
import Navbar from './components/navbar'
import Graph from './components/graph'
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'


class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path={'/'} component={Graph} />
        </Switch>
      </div>
    )
  }
}

export default App