import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import { queryReducer, showCompletedReducer, toDosReducer, authReducer } from 'reducers'
import thunk from 'redux-thunk'

const configure = (initialState = {}) => {
  const allReducers = combineReducers({
    query: queryReducer,
    showCompleted: showCompletedReducer,
    todos: toDosReducer,
    auth: authReducer
  })
  const store = createStore(allReducers, initialState, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))
  return (store)
}

export default configure
