import React from 'react'
import Graph from './components/graph'
import Navbar from './components/navbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <BrowserRouter>
      <div className="container" style={{ marginTop: '165px' }} />
      <Route path={'/'} component={Navbar} />
      <Switch>
        <Route exact path={'/'} component={Graph} />
      </Switch>
    </BrowserRouter>
  )
}

export default App