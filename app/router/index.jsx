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
    replace('/Login')
  }
  next()
}

const redirectIfLoggedIn = (nextState, replace, next) => {
  if (firebase.auth().currentUser && window.location.pathname.startsWith('/Login')) {
    replace('/ToDo')
  }
  next()
}

export default (
  <Router history={browserHistory}>
    <Route path="/">
      <IndexRoute name="Welcome" component={Welcome}/>
      <Route name="About" path="About" component={About}/>
      <Route name="Login" path="Login" component={Login} onEnter={redirectIfLoggedIn}/>
      <Route name="App" path="ToDo" component={ToDoApp} onEnter={requireLogin}/>
    </Route>
  </Router>
)
