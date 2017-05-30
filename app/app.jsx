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

const app = document.createElement('div')
app.id = 'app'
document.body.appendChild(app)

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(actions.login(user.uid))
    browserHistory.push('/ToDo/it')
  } else {
    store.dispatch(actions.logout())
    browserHistory.push('/ToDo')
  }
})

const store = configureStore()
store.dispatch(actions.startAddToDos())

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
