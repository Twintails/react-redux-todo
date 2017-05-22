import React from 'react'
import ReactDOM, { render } from 'react-dom';
import { Route, Router, IndexRoute, hashHistory, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

import ToDoApp from 'ToDoApp'

import * as actions from 'actions'
import configureStore from 'configureStore'
import ToDoAPI from 'ToDoAPI'

const store = configureStore()
store.dispatch(actions.startAddToDos())


//scss
import './assets/images/favicon.ico'
import './assets/Sass/style.scss'

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={ToDoApp}>
        {/* <IndexRoute component={Timer}/> */}
        {/* <Route path="countdown" component={Countdown}/> */}
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
