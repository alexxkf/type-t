import React from 'react'
import Graph from './components/graph'
import NewPost from './components/newPost'
import Navbar from './components/navbar'
import Bubbles from './components/bubbles'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <BrowserRouter>
      <div className="container" style={{ marginTop: '165px' }} />
      <Route path={'/'} component={Navbar} />
      <Switch>
        <Route exact path={'/'} component={Graph} />
        <Route path={'/newPost'} component={NewPost} />
      </Switch>
      <Route path={'/'} component={Bubbles} />
    </BrowserRouter>
  )
}

export default App