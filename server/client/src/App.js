import React, { Component } from 'react'
import Navbar from './components/navbar'
import Graph from './components/graph'
import NewPost from './components/newPost'
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path={'/'} component={Graph} />
          <Route exact path={'/newPost'} component={NewPost} />
        </Switch>
      </div>
    )
  }
}

export default App