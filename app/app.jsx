import React from 'react'
import ReactDOM, { render } from 'react-dom';
import {Route, Router, IndexRoute, hashHistory, browserHistory} from 'react-router'

import ToDoApp from 'ToDoApp'

//scss
import './assets/images/favicon.ico'
import './assets/Sass/style.scss'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={ToDoApp}>
      {/* <IndexRoute component={Timer}/> */}
      {/* <Route path="countdown" component={Countdown}/> */}
    </Route>
  </Router>,
  document.getElementById('app')
);
