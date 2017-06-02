import React from 'react'
import ReactDOM, { render } from 'react-dom';
import { Route, Router, IndexRoute, hashHistory, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

import * as actions from 'actions'
import configureStore from 'configureStore'
import firebase from 'app/firebase/'
import router from 'app/router/'

//scss
// import './assets/images/favicon.ico'
import './assets/Sass/style.scss'

const store = configureStore()

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(actions.login(user.uid))
    store.dispatch(actions.startAddToDos())
    if (window.location.pathname.startsWith('/Login')) {
      browserHistory.push('/ToDo')
    }
  } else {
    store.dispatch(actions.logout())
    if (window.location.pathname.startsWith('/ToDo')) {
      browserHistory.push('/Login')
    }
  }
})

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
