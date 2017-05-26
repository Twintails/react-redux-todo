import React from 'react'
import ReactDOM, { render } from 'react-dom';
import { Route, Router, IndexRoute, hashHistory, browserHistory } from 'react-router'
import { Provider } from 'react-redux'


import * as actions from 'actions'
import configureStore from 'configureStore'
import firebase from 'app/firebase/'
import router from 'app/router/'


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    browserHistory.push('/ToDo/it')
  } else {
    browserHistory.push('/ToDo')
  }
})

const store = configureStore()
store.dispatch(actions.startAddToDos())

//scss
import './assets/images/favicon.ico'
import './assets/Sass/style.scss'

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
