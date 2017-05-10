import React from 'react'
import ReactDOM, { render } from 'react-dom';
import { Route, Router, IndexRoute, hashHistory, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

import ToDoApp from 'ToDoApp'

import actions from 'actions'
import configureStore from 'configureStore'

const store = configureStore()
store.subscribe(() => {
  console.log('Update Store ', store.getState())
})

// store.dispatch(actions.addToDo('Moo the cows'))
// store.dispatch(actions.addToDo('Feed the cows'))
// store.dispatch(actions.addToDo('Pacify the cows'))
// store.dispatch(actions.setQuery('cow'))
// store.dispatch(actions.toggleShowCompleted())

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
