import React from 'react'
import ReactDOM, { render } from 'react-dom';
import { Route, Router, IndexRoute, hashHistory, browserHistory } from 'react-router'

import ToDoApp from 'ToDoApp'
import Login from 'Login'
import About from 'About'
import Welcome from 'Welcome'
import firebase from 'app/firebase/'

const requireLogin = (nextState, replace, next) => {
  if (!firebase.auth().currentUser) {
    replace('/ToDo')
  }
  next()
}

const redirectIfLoggedIn = (nextState, replace, next) => {
  if (firebase.auth().currentUser && window.location.pathname.startsWith('/ToDo')) {
    replace('/ToDo/it')
  }
  next()
}

export default (
  <Router history={browserHistory}>
    <Route path="/">
      <IndexRoute name="Welcome" component={Welcome}/>
      <Route name="About" path="About" component={About}/>
      <Route name="Login" path="ToDo" component={Login} onEnter={redirectIfLoggedIn}/>
      <Route name="App" path="/ToDo/it" component={ToDoApp} onEnter={requireLogin}/>
    </Route>
  </Router>
)
